import React, { useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [navBlack, setNavBlack] = useState(false);
  /*
  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };
  */
  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
      hover: "red",
      marginRight: "10px",
      textDecoration: "none",
    };
  };
  return (
    <div className={`navbar ${navBlack || "navbar__black"}`}>
      <NavLink to="/" style={navStyle}>
        <SiThemoviedatabase size={50} />
      </NavLink>

      <div className="nav_links">
        <NavLink to="/movie" className="nav__link" style={navStyle}>
          movies
        </NavLink>
        <NavLink to="/tv" className="nav__link" style={navStyle}>
          series
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
