import React from "react";
import "../../ComponentStyle/Credentails/Skills.css";
import Skill from "./Skill";
export default function Skills() {
  const skillsObject = [
    { skillName: "HTML/CSS", skillPercent: "90%", labelColor: "orange" },
    { skillName: "JavaScript", skillPercent: "90%", labelColor: "yellow" },
    { skillName: "React", skillPercent: "90%", labelColor: "blue" },
    { skillName: "Bootstrap", skillPercent: "85%", labelColor: "purple" },
    { skillName: "Anguler.TS", skillPercent: "60%", labelColor: "red" },
    { skillName: "C#", skillPercent: "90%", labelColor: "purple" },
    {
      skillName: ".NET Core Web API",
      skillPercent: "90%",
      labelColor: "purple",
    },
    { skillName: ".NET Core MVC", skillPercent: "%", labelColor: "purple" },
    { skillName: "Entity FrameWork", skillPercent: "", labelColor: "purple" },
    { skillName: "Node.js", skillPercent: "", labelColor: "green" },
    { skillName: "Express", skillPercent: "", labelColor: "black" },
    { skillName: "GIT", skillPercent: "", labelColor: "grey" },
    { skillName: "MongoDB", skillPercent: "", labelColor: "brown" },
    {
      skillName: "Microsoft SQL Server",
      skillPercent: "",
      labelColor: "white",
    },
  ];
  return (
    <div>
      <h2>Skills</h2>
      <div>
        {skillsObject.map((item) => (
          <Skill
            skillName={item.skillName}
            skillPercent={item.skillPercent}
            color={item.labelColor}
          />
        ))}
      </div>
    </div>
  );
}
