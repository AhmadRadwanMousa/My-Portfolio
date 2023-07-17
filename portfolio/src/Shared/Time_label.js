import React from "react";
import "../SharedStyle/Time_label.css";
export default function Time_label(props) {
  return (
    <div className="time-label-holder">
      <div className="year-text">
        {props.start}-{props.end}
      </div>
      <div className="label-text">{props.label}</div>
      <div className="position-text">{props.CompanyName}</div>
    </div>
  );
}
