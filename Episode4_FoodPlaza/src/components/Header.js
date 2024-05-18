import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnCLick, setBtnClick] = useState("login");
  const onlineStatus = useOnlineStatus()
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navContainer">
        <ul id="navItems">
          <li>
            Online Status {onlineStatus ? "🟢" : "🔴" }
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/glossary">Glossary Store</Link>
          </li>
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
