import React from "react";
import "../SharedStyle/Cardtext.css";
export default function Cardtext(props) {
  return (
    <div className="card-text-holder">
      <div className="card-label-text">{props.TextLabel}</div>
      <div className="card-category-text">{props.TextCategory}</div>
    </div>
  );
}
