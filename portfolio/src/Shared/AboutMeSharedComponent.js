import React from "react";
import "../SharedStyle/AboutMeSharedComponent.css";
import Time_label from "./Time_label";
export default function AboutMeSharedComponent(props) {
  return (
    <div className="about-me-shared-holder">
      <div className="about-me-header-label">{props.header}</div>
      <Time_label
        start={props.start[0]}
        end={props.end}
        label={props.label[0]}
        pos={props.pos}
      />
      {props.pos.length > 1 ? (
        <Time_label
          start={props.start[1]}
          end={props.end}
          label={props.label[1]}
          pos={props.pos[1]}
        />
      ) : null}
    </div>
  );
}
