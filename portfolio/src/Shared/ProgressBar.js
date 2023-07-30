import React from "react";
import "../SharedStyle/ProgressBar.css";
export default function ProgressBar(props) {
  console.log(props.width);
  return (
    <div class="progress-container">
      <div
        class="progress-line"
        style={{
          width: `${props.width}`,
          backgroundColor: `${props.color}`,
        }}></div>
    </div>
  );
}
