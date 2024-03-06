import { useState } from "react";
import AccordianBody from "./AccordianBody";

const Accordian = ({ item, toggleAccordian, setShowIndex }) => {
  //   const [toggleAccordian, setToggleAccordian] = useState(false);
  //   console.log(item.itemCards);
  return (
    <div
      className="flex justify-center cursor-pointer"
      onClick={() => setShowIndex()}
    >
      <div className="w-6/12">
        <div className="bg-orange-300 mt-4 p-3 rounded-md shadow-xl">
          <div className="flex justify-between">
            <p>
              {item.title} ({item.itemCards.length})
            </p>
            <span>{toggleAccordian ? "🔼" : "🔽"}</span>
          </div>
          {toggleAccordian ? <AccordianBody item={item.itemCards} /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
