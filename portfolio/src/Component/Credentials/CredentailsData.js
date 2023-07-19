import React from "react";
import "../../ComponentStyle/Credentails/CredentailsData.css";

export default function CredentailsData(props) {
  return (
    <div className="credentials-data-holder">
      <label>
        {props.start} - {props.end}
      </label>
      <h2 style={{ color: "#5b78f6" }}>{props.position}</h2>
      <label>{props.company}</label>
      <p>{props.About}</p>
    </div>
  );
}
