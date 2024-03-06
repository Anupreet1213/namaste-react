import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState();
  const [filteredResList, setFilteredResList] = useState([]);
  const [input, setInput] = useState("");

  const filterList = () => {
    const newList = resList.filter((item) =>
      item.info.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredResList(newList);
  };

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  const { setUserName, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    const data = async () => {
      let swiggyData = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=28.45970&lng=77.02820"
      );
      swiggyData = await swiggyData.json();
      console.log(swiggyData);
      swiggyData =
        swiggyData.data?.success?.cards[1]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants;
      setResList(swiggyData);
    };
    data();
  }, []);

  // if (!resList) {
  //   return (
  //     <div className="body">
  //       <input
  //         className="search-bar"
  //         placeholder="Search by Name"
  //         onChange={(e) => setInput(e.target.value)}
  //         value={input}
  //         type="text"
  //       />
  //       <input
  //         className="search-bar"
  //         z
  //         placeholder="Enter user name"
  //         onChange={(e) => setUserName(e.target.value)}
  //         value={loggedInUser}
  //         type="text"
  //       />
  //       <button onClick={filterList} className="button-5">
  //         Click to Filter
  //       </button>
  //       <div className="res-container">
  //         <Shimmer />
  //         <Shimmer />
  //         <Shimmer />
  //         <Shimmer />
  //         <Shimmer />
  //         <Shimmer />
  //         <Shimmer />
  //         <Shimmer />
  //         <Shimmer />
  //         <Shimmer />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="body p-4 flex flex-col items-center">
      <input
        className="search-bar"
        placeholder="Search by Name"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
      />
      <input
        className="search-bar"
        placeholder="Enter user name"
        onChange={(e) => setUserName(e.target.value)}
        value={loggedInUser}
        type="text"
      />
      <button onClick={filterList} className="button-5">
        Click to Filter
      </button>
      <div className="res-container">
        {filteredResList.length != 0
          ? filteredResList.map((item, id) =>
              item.info.promoted ? (
                <PromotedRestaurantCard key={id} item={item} />
              ) : (
                <RestaurantCard key={id} item={item} />
              )
            )
          : resList.map((item, id) =>
              item.info.promoted ? (
                <PromotedRestaurantCard key={id} item={item} />
              ) : (
                <RestaurantCard key={id} item={item} />
              )
            )}
        {/* {resList.map((item,id) => (
            <RestaurantCard key={id} item={item} />
          ))} */}
      </div>
    </div>
  );
};
export default Body;
