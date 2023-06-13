import React from "react";
import "../SharedStyle/FooterSection.css";
export default function FooterSection() {
  return (
    <div className="footer-section-holder">
      <div className="footer-section">
        <div className="footer-logo"></div>
        <div className="footer-links-sections">
          <div className="footer-links">Home</div>
          <div className="footer-links">Works</div>
          <div className="footer-links">Contact</div>
          <div className="footer-links">Lets Work</div>
        </div>
      </div>
    </div>
  );
}
