import React from "react";
import "../SharedStyle/AboutMeSharedComponent.css";
import Time_label from "./Time_label";
export default function AboutMeSharedComponent(props) {
  const MyData = props.MyData || [];
  return (
    <div className="about-me-shared-holder">
      <div className="about-me-header-label">{props.header}</div>
      <div className={`my-about-data-holder-${props.wrap}`}>
        {MyData.map((item) => (
          <Time_label
            start={item.startDate}
            end={item.EndDate}
            label={item.label}
            CompanyName={item.CompanyName}
          />
        ))}
      </div>
    </div>
  );
}
