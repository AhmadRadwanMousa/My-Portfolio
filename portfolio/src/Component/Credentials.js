import React from "react";
import "../ComponentStyle/Credentials.css";
import Cardtext from "../Shared/Cardtext";
export default function Credentials() {
  return (
    <div className="credentials-main-holder">
      <div className="credentials-logo"></div>
      <div className="credentials-text">
        <Cardtext TextLabel={"More About Me.."} TextCategory={"CREDENTIALS"} />
      </div>
    </div>
  );
}
