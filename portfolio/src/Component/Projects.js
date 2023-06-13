import React from "react";
import "../ComponentStyle/Projects.css";
import Cardtext from "../Shared/Cardtext";
export default function Projects() {
  return (
    <div className="projects-card-holder">
      <div className="projects-card-logo"></div>
      <Cardtext TextLabel={"My Projects.."} TextCategory={"PROJECTS"} />
    </div>
  );
}
