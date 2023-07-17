import React from "react";
import "../../ComponentStyle/Credentails/CredentialSection.css";
import CredentailsData from "./CredentailsData";
export default function CredentailSection() {
  return (
    <div className="credentials-section-holder">
      <CredentailsData />
      <CredentailsData />
      <CredentailsData />
    </div>
  );
}
