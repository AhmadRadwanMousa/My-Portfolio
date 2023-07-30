import React from "react";
import "../../ComponentStyle/Credentails/Skills.css";
import Skill from "./Skill";
export default function Skills() {
  const skillsObject = [
    {
      skillName: "HTML/CSS",
      skillPercent: "95%",
      labelColor: "orange",
      key: 1,
    },
    {
      skillName: "JavaScript",
      skillPercent: "90%",
      labelColor: "yellow",
      key: 2,
    },
    { skillName: "React", skillPercent: "85%", labelColor: "blue", key: 3 },
    {
      skillName: "Bootstrap",
      skillPercent: "80%",
      labelColor: "purple",
      key: 4,
    },
    { skillName: "Anguler.TS", skillPercent: "60%", labelColor: "red", key: 5 },
    { skillName: "C#", skillPercent: "90%", labelColor: "purple", key: 6 },
    {
      skillName: ".NET Core Web API",
      skillPercent: "70%",
      labelColor: "purple",
      key: 7,
    },
    {
      skillName: ".NET Core MVC",
      skillPercent: "90%",
      labelColor: "purple",
      key: 8,
    },
    {
      skillName: "Entity FrameWork",
      skillPercent: "60%",
      labelColor: "purple",
      key: 9,
    },
    { skillName: "Node.js", skillPercent: "80%", labelColor: "green", key: 10 },
    { skillName: "Express", skillPercent: "90%", labelColor: "black", key: 11 },
    { skillName: "MongoDB", skillPercent: "70%", labelColor: "brown", key: 13 },
    {
      skillName: "Microsoft SQL Server",
      skillPercent: "90%",
      labelColor: "pink",
      key: 14,
    },
  ];
  return (
    <div>
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsObject.map((item) => (
          <Skill
            key={item.key}
            skillName={item.skillName}
            skillPercent={item.skillPercent}
            color={item.labelColor}
          />
        ))}
      </div>
    </div>
  );
}
