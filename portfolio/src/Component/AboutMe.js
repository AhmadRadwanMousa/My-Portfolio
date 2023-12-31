import React from "react";
import "../ComponentStyle/AboutMe.css";
export default function AboutMe() {
  return (
    <div className="about-main-holder">
      <div className="about-content-holder">
        <div className="personal-image"></div>
        <div className="description-section">
          <div className="major-header-section">Software Engineer</div>
          <div className="name-section">AHMAD MOUSA.</div>
          <div className="introduction-section">
            I'm a full stack web developer based in Jordan.
          </div>
        </div>
      </div>
    </div>
  );
}
