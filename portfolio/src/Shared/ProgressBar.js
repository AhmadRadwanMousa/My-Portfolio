import React from "react";
import "../SharedStyle/ProgressBar.css";
export default function ProgressBar(props) {
  console.log(props.color);
  return (
    <div class="progress-container">
      <div
        class="progress-line"
        style={{
          width: `${props.width}rem`,
          backgroundColor: `${props.color}`,
        }}></div>
    </div>
  );
}
