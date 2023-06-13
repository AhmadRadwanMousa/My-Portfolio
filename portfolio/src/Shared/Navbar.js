import React from "react";
import "../SharedStyle/Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar-main-holder">
      <div className="navbar-item-logo"></div>
      <div className="navbar-item">About</div>
      <div className="navbar-item">Works</div>
      <div className="navbar-item">Contact</div>
      <button className="navbar-contact-btn">Let's Work!</button>
    </div>
  );
}
