import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { ITEM_API } from "../utils/constants";
import UserContext from "../utils/UserContext";


const Body = () => {

    // Local State Variable - Super Powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    console.log("Body Rendered", listOfRestaurants);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(ITEM_API);

        const json = await data.json();
        console.log(json);

        // Optional Chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>Looks like you're offline!! Please check your internet connection</h1>
    }

    const { setUserName, loggedInUser } = useContext(UserContext);

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search p-4 m-4">
                    <input
                        type="text"
                        className="border border-solid border-black p-1"
                        value={searchText}
                        onChange={(e) => {
                            // console.log(e);
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            // Filter the restaurant cards and update the UI
                            // searchText
                            console.log(searchText);

                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            console.log("filteredRestaurant", filteredRestaurant);
                            setFilteredRestaurant(filteredRestaurant);
                        }}>search</button>
                </div>
                <div className="search p-4 m-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res?.info?.avgRating > 4
                            );
                            setFilteredRestaurant(filteredList);
                            // console.log("filteredList", filteredList);
                        }}>
                        Top Rated Restaurant
                    </button>
                </div>
                <div className="search p-4 m-4 flex items-center">
                    UserName : <input
                        className="border border-black mx-1 p-1"
                        type="text"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-wrap mx-11">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {/* if the restaurant is promoted then add a promoted label to it */}
                        {restaurant.info.promoted ? (
                            <RestaurantCardPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                        {/* <RestaurantCard resData={restaurant} /> */}
                    </Link>
                ))
                }
            </div>
        </div >
    )
}

export default Body;

// React 6 19 14 BE 28 JS 14

// MY UNDERSTANDING NOT SURE NEED TO CONFIRM
//what i found is when single promise then it prints same time as only 1 promise is there,
// when first promsie 10 sec and second promise 5 second it prints both after 10 sec as 5 second of 2nd promise
// also cover in 10 second of first promise
// when first promsie 5 sec and second promise 10 second it prints first promise after 5 second and after 5
// more second it prints second promise as 10 seconds of second promise covered with first promise of 5 second
