import React from "react";
import "../ComponentStyle/Logo.css";
export default function Logo(props) {
  return (
    <div
      className="service-logo"
      style={{ backgroundImage: `url('${props.url}')` }}></div>
  );
}
