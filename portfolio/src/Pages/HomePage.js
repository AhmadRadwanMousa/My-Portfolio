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
export default function HomePage() {
  return (
    <div className="home-page-holder">
      <Navbar />
      <ContentHolder>
        <AboutMe />
        <Credentials />
        <Projects />
        <Service />
        <Profile />
      </ContentHolder>
      <FooterSection />
    </div>
  );
}
