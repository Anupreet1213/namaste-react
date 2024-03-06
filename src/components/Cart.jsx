import { useDispatch, useSelector } from "react-redux";
import AccordianBody from "./AccordianBody";
import AccordianItem from "./AccordianItem";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleDelete = () => {
    if (cartItems.length > 0) {
      dispatch(removeItem());
    }
  };

  //   console.log(cartItems);
  return (
    <div className="m-4 p-4">
      <h1 className="text-2xl font-bold text-center">Cart</h1>
      <div className="gap-2 flex">
        <span
          className="text-left bg-orange-500 p-2 text-white rounded hover:bg-orange-600 hover:cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </span>
        <span
          className="text-left bg-orange-500 p-2 text-white rounded hover:bg-orange-600 hover:cursor-pointer"
          onClick={handleDelete}
        >
          Delete
        </span>
      </div>
      {cartItems.map((eachItem, id) => (
        <AccordianItem key={id} item={eachItem} />
      ))}
    </div>
  );
};

export default Cart;
