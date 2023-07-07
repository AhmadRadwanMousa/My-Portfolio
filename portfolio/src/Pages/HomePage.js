import React from "react";
import Navbar from "../Shared/Navbar";
import ContentHolder from "../Shared/ContentHolder";
import "../PagesStyle/HomePage.css";
import AboutMe from "../Component/AboutMe";
import Credentials from "../Component/Credentials";
import Projects from "../Component/Projects";
import Service from "../Component/Service";
import Profile from "../Component/Profile";
import FooterSection from "../Shared/FooterSection";
import DropDownAnimation from "../Shared/DropDownAnimation";
import FadeoutAnimation from "../Shared/FadeoutAnimation";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <DropDownAnimation>
      <Navbar />
      <ContentHolder>
        <FadeoutAnimation>
          <Link to={"/About"} className="links-class">
            <AboutMe />
          </Link>
        </FadeoutAnimation>
        <FadeoutAnimation>
          <Link to={"/Credentials"} className="links-class">
            <Credentials />
          </Link>
        </FadeoutAnimation>
        <FadeoutAnimation>
          <Link to={"/Work"} className="links-class">
            <Projects />
          </Link>
        </FadeoutAnimation>
        <FadeoutAnimation>
          <Link to={"/Services"}>
            <Service />
          </Link>
        </FadeoutAnimation>
        <FadeoutAnimation>
          <Link to={"/Contact"}>
            <Profile />
          </Link>
        </FadeoutAnimation>
      </ContentHolder>
      <FooterSection />
    </DropDownAnimation>
  );
}
