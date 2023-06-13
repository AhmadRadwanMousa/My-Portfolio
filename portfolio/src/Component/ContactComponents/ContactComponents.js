import React from "react";
import "../../ComponentStyle/ContactComponentStyle/ContactComponents.css";
export default function ContactComponents(props) {
  return (
    <div className="contact-data-holder">
      <div className="contact-box-logo-holder">
        <div
          className="contact-logo"
          style={{ backgroundImage: `url('${props.url}')` }}></div>
      </div>
      <div className="contact-information-data">
        <div className="contact-bussing-label">{props.contactLabel}</div>
        <div className="contact-bussing-information">{props.contactInfo1}</div>
        <div className="contact-bussing-information">{props.contactInfo2}</div>
      </div>
    </div>
  );
}
