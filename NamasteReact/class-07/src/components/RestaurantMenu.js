import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const params = useParams();
    console.log(params);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + params.resId);

        const json = await data.json();
        console.log(json);
        setResInfo(json?.data)
    }

    if (resInfo === null) {
        return <Shimmer />
    }

    //destructuring so code can look clean
    const { cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.text}</h1>
            <p>{cuisines[0]} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {" Rs. "}
                        {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}
                    </li>
                ))
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;

//doubt why we using as we can also use empty string
//why we store json.data in setResInfo
//why we using id here? is this bcoz this api is differnet from previous one coz in previous one there are
// basic details of item but in this there is menu and alot info abt that one item and when we click on that card
// we will get the id and y putting that id we get specific info of that res which will beprovided by the api
// but by id it will pick the specific info