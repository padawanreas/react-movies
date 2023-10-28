import React, { useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";
import "../Nav/Nav.css";
import { NavLink } from "react-router-dom";

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
      color: isActive ? "red" : "white",
      hover: "red",
      marginRight: "10px",
      textDecoration: "none",
    };
  };
  return (
    <>
      <div className={`navbar ${navBlack || "navbar__black"}`}>
        <NavLink to="/">
          <SiThemoviedatabase size={50} color="white" />
        </NavLink>
      </div>
    </>
  );
}

export default NavBar;
