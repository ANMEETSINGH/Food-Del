import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  // we make a const menu&setmenu so that we make active menu when menu is clicked
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    // this is the navbar class where we create all navbar things
    <div className="navbar">
      {/* in navbar-- first thing is LOGO */}
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      {/*second thing is menu where we have 4items */}
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      {/* then we have the right side of the navbar */}
      <div className="navbar-right">
        {/* in right side first thing is search logo */}
        <img src={assets.search_icon} alt="" />
        {/* then we have div where we have basket logo and a div name dot */}
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount === 0 ? "" : "dot"}></div>
        </div>
        {/* inside right side we have a button sign in */}
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
