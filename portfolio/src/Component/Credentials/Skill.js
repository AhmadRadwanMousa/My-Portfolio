import React from "react";
import "../../ComponentStyle/Credentails/Skill.css";
import ProgressBar from "../../Shared/ProgressBar";
export default function Skill(props) {
  return (
    <div className="skill-wrapper">
      <label>{props.skillPercent}</label>
      <h3>{props.skillName}</h3>
      <ProgressBar width={props.skillPercent} color={props.color} />
    </div>
  );
}
