import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);    // const {loggedInUser} - we can destructure it directly
    console.log("data", data);

    return (
        <div className="flex justify-between bg-red-500 shadow-lg sm:bg-pink-100">
            <div className="logo-container">
                {/* <img className="logo" src="https://img.lovepik.com/element/45006/2391.png_860.png" /> */}
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;

// tere shehar aaye tujhse mile nhi h,
// kya btaye ab tumse jane anjane gike shikwe kayi h,
// tune pucha nhi or humne btaya nhi,
// teri god ko fir sirane sa lgaya nhi..
// teri baat na kri fir tu rooth gyi,
// teri baato m dikhte h mujhe jhoot kayi,
// karu nazaeandaaz inhe
// hum pheele se barbaad usse lgta h vo hume loot gyi
// ankhon m dikhta tere bhi sawaal ek,
// ek sath mange hath mange,
// pahado m door khi taaro ki chadar chota sa khawab ek,
// havaaye chue mujhe baho ko teri ghar bnalu,
// tujhe chahte chahat se bhi jayda hain itni tu nayab dekh