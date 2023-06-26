import React from "react";
import "../SharedStyle/ContentHolder.css";
export default function ContentHolder(props) {
  return (
    <div className="content-main-holder">
      <div className="content-holder" style={{ gap: `${props.gapValue}rem` }}>
        {props.children}
      </div>
    </div>
  );
}
