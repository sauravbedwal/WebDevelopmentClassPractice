import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="p-5 m-5 w-[250px] rounded-lg  bg-gray-100 hover:bg-gray-200">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-lg"
      />
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
