import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnCLick, setBtnClick] = useState("login");
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navContainer">
        <ul id="navItems">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnCLick == "login"
                  ? setBtnClick("logout")
                  : setBtnClick("login");
              }}
            >
              {btnCLick}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
