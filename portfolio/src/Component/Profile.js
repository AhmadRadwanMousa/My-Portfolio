import React from "react";
import "../ComponentStyle/Profile.css";
import ProfileLinks from "../Shared/ProfileLinks";
import gitHubLogo from "../Images/github-mark-white.png";
import linkedIn from "../Images/icons8-linkedin-150.png";
import instagram from "../Images/icons8-instagram-150.png";
import whatsapp from "../Images/icons8-whatsapp-150.png";
import twitter from "../Images/icons8-twitter-150.png";
import Cardtext from "../Shared/Cardtext";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div className="profile-card-holder">
      <div className="profile-links-main-holder">
        <ProfileLinks url={gitHubLogo} />
        <ProfileLinks url={linkedIn} />
        <ProfileLinks url={instagram} />
        <ProfileLinks url={twitter} />
        <ProfileLinks url={whatsapp} />
      </div>
      <Link to={"/Contact"} className="links-class">
        <div className="profile-text-section">
          <Cardtext TextLabel={"STAY WITH ME!"} TextCategory={"Profiles"} />
        </div>
      </Link>
    </div>
  );
}
