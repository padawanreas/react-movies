import React, { useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";
import "../Nav/Nav.css";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  const [navBlack, setNavBlack] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };
  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blue",
      hover: "red",
      marginRight: "10px",
      textDecoration: "none",
    };
  };
  return (
    <>
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
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default NavBar;
