import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchData = async () => {
    const res = await fetch(RESTAURANT_API);
    const data = await res.json();
    console.log(data);
    // console.log(
    //   data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListOfRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (listOfRestaurants === null) return;

  const filterRestaurants = () => {
    const filteredList = listOfRestaurants.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.3;
    });
    // console.log(filteredList);
    // setListOfRestaurants(filteredList);
    setFilteredRestaurants(filteredList);
  };

  // const scrollData = async () => {
  //   const res = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/update",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({}),
  //     }
  //   );

  //   const data = await fetch(res);

  //   console.log("data: " + data);
  // };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your Internet Connection</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          />
          <button
            className="bg-green-100 px-4 py-2 ml-4 rounded-lg"
            onClick={() => {
              // console.log("searchRestaurants", searchText);
              const searchRestaurantsList = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(searchRestaurantsList);
              setFilteredRestaurants(searchRestaurantsList);
            }}
          >
            search
          </button>
        </div>
        <div className="my-4 p-4 flex items-center">
          <button
            className="bg-gray-100 px-4 py-2 rounded-lg"
            onClick={filterRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={`/restaurantMenu/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
        {/* {filteredRestaurants.length !== 0
          ? filteredRestaurants.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant?.info?.id}
                  resData={restaurant}
                />
              );
            })
          : listOfRestaurants.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant?.info?.id}
                  resData={restaurant}
                />
              );
            })} */}
      </div>
    </div>
  );
};

export default Body;
