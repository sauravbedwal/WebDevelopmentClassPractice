import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // https://proxy.cors.sh/
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

  // if (listOfRestaurants === null) return;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          />
          <button
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
        <button className="filter-btn" onClick={filterRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
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
