import { useState } from "react";

const LoginBtn = () => {
  const [btnToggle, setBtnToggle] = useState("Login");
  return (
    <button
      className="button-87"
      onClick={() =>
        btnToggle === "Login" ? setBtnToggle("Logout") : setBtnToggle("Login")
      }
    >
      {btnToggle}
    </button>
  );
};

export default LoginBtn;
