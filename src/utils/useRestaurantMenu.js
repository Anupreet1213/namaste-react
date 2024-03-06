import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [resData, setResData] = useState([]);
  const URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

  useEffect(() => {
    const data = async () => {
      try {
        let data = await fetch(URL);
        data = await data.json();
        // data = data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards;
        data =
          data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (item) =>
              item?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        console.log(data);
        setResData(data);
        // console.log(resData);
      } catch (e) {
        console.log("Error from useRestaurantMenu: " + e);
      }
    };

    data();
  }, []);

  return resData;
};

export default useRestaurantMenu;
