import { Link } from "react-router-dom";

const RestaurantCard = ({ item }) => {
  return (
    <Link to={`/restaurant/${item.info.id}`}>
      <div
        data-testid="resCard"
        className="res-card w-[max(20vw, 200px)] p-4 border-[1px] border-[solid] border-[#fd6e03] rounded-[20px] flex flex-col gap-4 hover:cursor-pointer"
      >
        <img
          className="momos w-[100%] rounded-[15px] [box-shadow:0px_7px_21px_1px_rgba(253,_110,_3,_0.72)]"
          alt="momos"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            item.info.cloudinaryImageId
          }
        />
        <p>{item.info.name}</p>
        <p>{item.info.cuisines.join(", ")}</p>
        <p>
          {item.info.avgRating ? item.info.avgRating + " stars" : "5 stars"}
        </p>
        <p>{item.info.sla.deliveryTime + " minutes"} </p>
      </div>
    </Link>
  );
};
export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-800 text-white p-3 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
