import { NavLink } from "react-router-dom";

//we can use styles either this or simply in css file
const navLinkStyles = ({ isActive }) => {                 // console.log(data); we can se an object with the property of isActive
    return {
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? "none" : "underline",
    };
};

export const Navbar = () => {
  return (
    <nav className="primary-nav">
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="about">About</NavLink>
        <NavLink style={navLinkStyles} to="products">Products</NavLink>
    </nav>
  );
};
