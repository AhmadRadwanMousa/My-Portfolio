import React from "react";
import "../../ComponentStyle/Credentails/CredentialSection.css";
import CredentailsData from "./CredentailsData";
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import Skills from "./Skills";
export default function CredentailSection() {
  const EductionData = [
    {
      startDate: 2019,
      EndDate: 2023,
      label: "Bachelor Degree in Software Engineering ",
      CompanyName: "Jordan University of Science and Technology(JUST)",
    },
  ];
  const credentialsData = [
    {
      start: "Feb 2023",
      end: "June 2023",
      position: "ASP.NET Core MVC Developer",
      company: "The Hope International",
      About: "",
    },
    {
      start: "July 2023",
      end: "Present 2023",
      position: ".NET Full Stack Developer",
      company: "Tahaluf Al Emarat Technical Solutions",
      About: "",
    },
    {
      start: "Jan 2023",
      end: "July 2023",
      position: "Full Stack MERN Developer",
      company: "Udemy",
      About: "",
    },
    {
      start: "Sep 2022",
      end: "Dec 2022",
      position: "Python Developer",
      company: "Jo Vision",
      About: "",
    },
  ];
  return (
    <div className="credentials-section-holder">
      <AboutMe />
      <h2>EXPERIENCE</h2>
      <div className="credentials-data-wrapper">
        {credentialsData.map((item) => (
          <CredentailsData
            start={item.start}
            end={item.end}
            position={item.position}
            company={item.company}
            About={item.About}
          />
        ))}
      </div>
      <h2>EDUCATION</h2>
      {EductionData.map((item) => (
        <CredentailsData
          start={item.startDate}
          end={item.EndDate}
          position={item.label}
          company={item.CompanyName}
        />
      ))}

      <Skills />
    </div>
  );
}
