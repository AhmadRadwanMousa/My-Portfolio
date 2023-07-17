import React from "react";
import "../ComponentStyle/Credentials.css";
import Cardtext from "../Shared/Cardtext";
import { Link } from "react-router-dom";
export default function Credentials() {
  return (
    <Link to={"/Credentials"} className="links-class">
      <div className="credentials-main-holder">
        <div className="credentials-logo"></div>
        <div className="credentials-text">
          <Cardtext
            TextLabel={"More About Me.."}
            TextCategory={"CREDENTIALS"}
          />
        </div>
      </div>
    </Link>
  );
}
