import React, { useEffect, useState } from "react";
import "../SharedStyle/Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [ShowMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!ShowMenu);
  };
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setShowMenu(false);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {screenWidth <= 576 ? (
        <div className="navbar-holder-sm">
          <div className="navbar-toggle-icon" onClick={toggleMenu}>
            {ShowMenu ? (
              <div className="navbar-item-holder ">
                <Link to={"/"} className="navbar-links">
                  Home
                </Link>{" "}
                <Link to={"/About"} className="navbar-links">
                  About
                </Link>{" "}
                <Link to={"/Works"} className="navbar-links">
                  Works
                </Link>
                <Link to={"/Contact"} className="navbar-links">
                  Contact
                </Link>
                <div className="navbar-links">Let's Work!</div>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <>
          <div className="navbar-main-holder">
            <div className="navbar-item-logo"></div>
            <Link to={"/"} className="navbar-links">
              Home
            </Link>{" "}
            <Link to={"/About"} className="navbar-links">
              About
            </Link>{" "}
            <Link to={"/Works"} className="navbar-links">
              Works
            </Link>
            <Link to={"/Contact"} className="navbar-links">
              Contact
            </Link>
            <div className="navbar-links">Let's Work!</div>
          </div>
        </>
      )}
    </>
  );
}
