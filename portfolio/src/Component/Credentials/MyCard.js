import React from "react";
import "../../ComponentStyle/Credentails/MyCard.css";
import ProfileLinks from "../../Shared/ProfileLinks";
import gitHubLogo from "../../Images/github-mark-white.png";
import linkedIn from "../../Images/icons8-linkedin-150.png";
import instagram from "../../Images/icons8-instagram-150.png";
import whatsapp from "../../Images/icons8-whatsapp-150.png";
import twitter from "../../Images/icons8-twitter-150.png";
export default function MyCard() {
  return (
    <div className="my-card-credentials-holder">
      <div className="my-card-image"></div>
      <p style={{ color: "white", opacity: "0.7", fontSize: "1.8rem" }}>
        Ahmad Mousa
      </p>

      <div className="profile-links-main-holder">
        <ProfileLinks width={"3"} height={"3"} url={gitHubLogo} />
        <ProfileLinks width={"3"} height={"3"} url={linkedIn} />
        <ProfileLinks width={"3"} height={"3"} url={instagram} />
        <ProfileLinks width={"3"} height={"3"} url={whatsapp} />
        <ProfileLinks width={"3"} height={"3"} url={twitter} />
      </div>
      <button className="contact-me-credentials-btn">Contact Me</button>
    </div>
  );
}
