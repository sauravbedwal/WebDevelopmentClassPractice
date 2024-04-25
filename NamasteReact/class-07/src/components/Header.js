import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header render");

    // if no dependency array => useEffect is called on every render(component render).
    // if dependency array is empty = [] => useEffect is called on initial / first render(just once).
    // if dependency array is[btnNameReact] => called everytime btnNameReact is updated.
    useEffect(() => {
        console.log("useEffect called");
    });

    return (
        <div className="header">
            <div className="logo-container">
                {/* <img className="logo" src="https://img.lovepik.com/element/45006/2391.png_860.png" /> */}
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;

// tere shehar aaye tujhse mile nhi history,
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