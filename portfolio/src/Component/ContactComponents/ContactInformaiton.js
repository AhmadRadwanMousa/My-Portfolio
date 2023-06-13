import React from "react";
import "../../ComponentStyle/ContactComponentStyle/ContactInformation.css";
import ContactComponents from "./ContactComponents";
import ProfileLinks from "../../Shared/ProfileLinks";
import gitHubLogo from "../../Images/github-mark-white.png";
import linkedIn from "../../Images/icons8-linkedin-150.png";
import instagram from "../../Images/icons8-instagram-150.png";
import whatsapp from "../../Images/icons8-whatsapp-150.png";
import email from "../../Images/icons8-email-64.png";
import phone from "../../Images/icons8-phone-100.png";
import location from "../../Images/icons8-location-100.png";
import facebook from "../../Images/icons8-facebook-150.png";
export default function ContactInformaiton() {
  return (
    <div className="contact-information-section">
      <div className="contact-section-holder">
        <div className="contact-label">CONTACT INFO</div>
        <ContactComponents
          url={email}
          contactLabel={"MAIL ME"}
          contactInfo1={"ahmadzuiod312@gmail.com"}
          contactInfo2={"armousa19@cit.jus.edu.jo"}
        />
        <ContactComponents
          url={phone}
          contactLabel={"CONTACT ME"}
          contactInfo1={"+962 790013290"}
          contactInfo2={"+962 772156583"}
        />
        <ContactComponents
          url={location}
          contactLabel={"LOCATION"}
          contactInfo1={"AMMAN"}
          contactInfo2={"JORDAN"}
        />
        <div className="contact-label">SOCIAL INFO</div>
        <div className="contact-links-wrapper">
          <ProfileLinks url={gitHubLogo} />
          <ProfileLinks url={linkedIn} />
          <ProfileLinks url={instagram} />
          <ProfileLinks url={whatsapp} />
          <ProfileLinks url={facebook} />
        </div>
      </div>
    </div>
  );
}
