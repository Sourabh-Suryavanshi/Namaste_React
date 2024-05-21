import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnCLick, setBtnClick] = useState("login");
  const onlineStatus = useOnlineStatus()
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="w-44">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navContainer">
        <ul id="navItems" className="flex p-4 m-5">
          <li className="px-4">
            Online Status {onlineStatus ? "🟢" : "🔴" }
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/glossary">Glossary Store</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
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
