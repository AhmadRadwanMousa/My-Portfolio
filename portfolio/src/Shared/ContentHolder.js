import React from "react";
import "../SharedStyle/ContentHolder.css";
export default function ContentHolder(props) {
  return (
    <div className="content-main-holder">
      <div className="content-holder">{props.children}</div>
    </div>
  );
}
