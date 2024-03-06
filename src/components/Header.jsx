import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import LoginBtn from "./LoginBtn";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const userData = useContext(UserContext);

  // Subscribing to the store using useSelector hook
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  // console.log(userData);

  return (
    <div className="header flex justify-between items-center p-[1rem]">
      <div className="logo-container">
        <img className="logo w-[4rem]" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex list-none gap-4 text-lg items-center">
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <LoginBtn />
          <li className="font-bold">{userData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
