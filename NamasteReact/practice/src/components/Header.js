import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <Link to="/">
          <img src={LOGO_URL} className="w-40" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex px-5">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" style={{ textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" style={{ textDecoration: "none" }}>
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="py-1 px-4 cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
