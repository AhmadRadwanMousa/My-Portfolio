import React from "react";
import "../PagesStyle/AboutPage.css";
import Navbar from "../Shared/Navbar";
import ContentHolder from "../Shared/ContentHolder";
import FooterSection from "../Shared/FooterSection";
import MyImageComponent from "../Component/AboutComponents/MyImageComponent";
import SelfSummary from "../Component/AboutComponents/SelfSummary";
import AboutMeSharedComponent from "../Shared/AboutMeSharedComponent";
import Credentials from "../Component/Credentials";
import Profile from "../Component/Profile";
import FadeoutAnimation from "../Shared/FadeoutAnimation";
import DropDownAnimation from "../Shared/DropDownAnimation";
export default function AboutPage() {
  const EductionData = [
    {
      startDate: 2019,
      EndDate: 2023,
      label: "Bachelor Degree in Software Engineering GPA : (3.3/4) Very Good",
      CompanyName: "Jordan University of Science and Technology",
    },
  ];
  const ExperienceData = [
    {
      startDate: "Feb 2023",
      EndDate: "June 2023",
      label: "ASP.NET Core MVC Developer",
      CompanyName: "The Hope International",
    },
    {
      startDate: "Feb 2023",
      EndDate: "June 2023",
      label: ".NET Full Stack Developer",
      CompanyName: "Tahaluf Al Emarat Technical Solutions",
    },
    {
      startDate: "Jan 2023",
      EndDate: "July 2023",
      label: "MERN Stack Developer",
      CompanyName: "Udemy",
    },
  ];
  return (
    <DropDownAnimation>
      <Navbar />
      <ContentHolder gapValue={2}>
        <FadeoutAnimation>
          <MyImageComponent />
        </FadeoutAnimation>
        <FadeoutAnimation>
          <SelfSummary />
        </FadeoutAnimation>
        <AboutMeSharedComponent
          header={"EDUCATION"}
          MyData={EductionData}
          wrap={""}
        />
        <AboutMeSharedComponent
          header={"EXPERIENCE"}
          MyData={ExperienceData}
          wrap={"yes"}
        />

        <FadeoutAnimation>
          <Credentials />
        </FadeoutAnimation>
        <FadeoutAnimation>
          <Profile />
        </FadeoutAnimation>
      </ContentHolder>
      <FooterSection />;
    </DropDownAnimation>
  );
}
