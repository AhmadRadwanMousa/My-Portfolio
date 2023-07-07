import React from "react";
import "../SharedStyle/DropDownAnimation.css";
export default function DropDownAnimation(props) {
  return (
    <div className="drop-down-container">
      <div className="my-element">{props.children}</div>
    </div>
  );
}
