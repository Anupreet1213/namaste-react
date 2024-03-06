import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const AccordianItem = ({ item }) => {
  const disptach = useDispatch();
  const handleAddItem = (eachItem) => {
    disptach(addItem(eachItem));
  };

  return (
    <div className="flex justify-between mb-3 py-4 border-gray-500 border-solid border-b-[1px]">
      <div>
        <p className="font-extrabold">{item.name}</p>
        <p>₹ {item.price ? item.price / 100 : item.defaultPrice / 100}</p>
        <p className="text-gray-600">{item.description}</p>
      </div>
      <div className="w-3/12 relative">
        <img
          className="w-24 ml-auto"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId}`}
          alt="food"
        />
        <div
          className="absolute bg-black text-white right-0 top-0 rounded-md p-1"
          onClick={() => handleAddItem(item)}
        >
          Add +
        </div>
      </div>
    </div>
  );
};

export default AccordianItem;
