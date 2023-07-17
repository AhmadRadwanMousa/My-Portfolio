import React from "react";
import "../ComponentStyle/Projects.css";
import Cardtext from "../Shared/Cardtext";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <Link to={"/Work"} className="links-class">
      <div className="projects-card-holder">
        <div className="projects-card-logo"></div>
        <Cardtext TextLabel={"My Projects.."} TextCategory={"PROJECTS"} />
      </div>
    </Link>
  );
}
