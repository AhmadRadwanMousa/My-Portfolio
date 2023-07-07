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
          start={[2019, ""]}
          end={2023}
          label={[
            "Bachelor Degree in Software Engineering GPA : (3.3/4) Very Good",
            "",
          ]}
          pos={["Jordan University of Science and Technology"]}
        />
        <AboutMeSharedComponent
          header={"EXPERIENCE"}
          start={[2022, 2023]}
          end={2023}
          label={["The Hope International ", "Udemy Courses"]}
          pos={["ASP.NET Core Developer", "Full stack MERE Developer"]}
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
