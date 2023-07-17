import React from "react";
import "../SharedStyle/ProfileLinks.css";
export default function ProfileLinks(props) {
  return (
    <div
      className="profile-link-holder"
      style={{ width: `${props.width}rem`, height: `${props.height}rem` }}>
      <div
        className="link-logo"
        style={{
          backgroundImage: `url('${props.url}')`,
        }}></div>
    </div>
  );
}
