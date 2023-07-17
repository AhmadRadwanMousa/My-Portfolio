import React from "react";
import "../ComponentStyle/Service.css";
import Logo from "./Logo";
import Cardtext from "../Shared/Cardtext";
import reactLogo from "../Images/icons8-react-64.png";
import javaScript from "../Images/icons8-javascript-480.png";
import dotNet from "../Images/NET_Core_Logo.svg";
import nodeJs from "../Images/icons8-node-js-240.png";
import mongo from "../Images/pngwing.com.png";
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <div className="service-main-card-holder">
      <div className="service-logos-holder">
        <Logo url={reactLogo} />
        <Logo url={javaScript} />
        <Logo url={dotNet} />
        <Logo url={nodeJs} />
        <Logo url={mongo} />
      </div>
      <div className="service-text-holder">
        <Link to={"/Services"} className="links-class">
          <Cardtext
            TextLabel={"SPECIALIZATION"}
            TextCategory={"Services Offered"}
          />
        </Link>
      </div>
    </div>
  );
}
