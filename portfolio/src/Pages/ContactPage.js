import React from "react";
import "../PagesStyle/ContactPage.css";
import NavBar from "../Shared/Navbar";
import ContentHolder from "../Shared/ContentHolder";
import FooterSection from "../Shared/FooterSection";
import ContactInformaiton from "../Component/ContactComponents/ContactInformaiton";
export default function ContactPage() {
  return (
    <>
      <NavBar />
      <ContentHolder>
        <ContactInformaiton />
      </ContentHolder>
      <FooterSection />
    </>
  );
}
