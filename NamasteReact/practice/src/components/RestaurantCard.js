import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
