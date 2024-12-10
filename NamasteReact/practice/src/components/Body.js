import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const filterRestaurants = () => {
    const filteredList = resList.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.3;
    });

    // console.log(filteredList);
    setListOfRestaurants(filteredList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
