import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
    const { resId } = useParams();     //destrured it from the params object
    // console.log(resId);

    const dummy = "Dummy Data";

    const resInfo = useRestaurantMenu(resId);
    // console.log("resInfo", resInfo);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) {
        return <Shimmer />
    }

    //destructuring so code can look clean
    const { cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });
    console.log("categories", categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[0]?.card?.card?.text}</h1>
            <p className="font-bold text-lg">{cuisines[0]} - {costForTwoMessage}</p>
            {/* categories accordions */}
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    dummy={dummy}
                />
            ))}
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

//iN SWIGGY API, when we do console.resInfo i.e. the data fetch from API we got cards an Array(5) in which 0
// is for header location, 1 is for order online, 2 is for name rating and cost showing befoer offers, 3 is
// for bank offers, then 4 comes for restaurant menu details in which inside it there is an Array(17)
// in which 0 is for only veg/non veg button, 1 is for Top pics crousel, then 2 comes for dropdown Recommend
// and inside it there is an Array(20) items in it and now in 3 of Array(17) is for dropdown
// New MELTS - Crispy. Cheesy. Loaded., and in 4 of Array(17) is for dropdown New Thin n Crispy Pizzas and
// same like this the whole page covers till 16 of Array(17).


// took categories bcoz i want to make categories dropdowns but what if i want to make wnhole page then i
// will filter it or not?