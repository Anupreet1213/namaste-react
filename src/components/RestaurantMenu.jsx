import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";

const RestaurantMenu = () => {
  // console.log(URL);
  const [toggleAccordian] = useState(true);
  const [showIndex, setShowIndex] = useState(0);

  const { id } = useParams();

  const resData = useRestaurantMenu(id);

  // console.log(resData[0]?.card?.card?.itemCards[0]?.card?.info?.name);
  // console.log(resData);

  return (
    <div>
      {resData.map((item, id) => (
        <Accordian
          key={id}
          item={item.card.card}
          toggleAccordian={id === showIndex ? toggleAccordian : ""}
          setShowIndex={() => setShowIndex(id)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
