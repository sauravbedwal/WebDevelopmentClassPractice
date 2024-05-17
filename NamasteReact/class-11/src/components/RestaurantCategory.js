import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
    // console.log(data);

    //Earlier we were controlling the accordion/ItemList from this state due to which all accordion were 
    // individually show and collapse. 
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        // console.log("click");
        // setShowItems(!showItems);
        setShowIndex();
    };

    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {/* Accordion Body */}
                {showItems && <ItemList items={data?.itemCards} dummy={dummy} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;