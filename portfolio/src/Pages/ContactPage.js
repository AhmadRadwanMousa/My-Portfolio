import React from "react";
import "../PagesStyle/ContactPage.css";
import NavBar from "../Shared/Navbar";
import ContentHolder from "../Shared/ContentHolder";
import FooterSection from "../Shared/FooterSection";
import ContactInformaiton from "../Component/ContactComponents/ContactInformaiton";
import ContactForm from "../Component/ContactComponents/ContactForm";
export default function ContactPage() {
  return (
    <>
      <NavBar />
      <ContentHolder gapValue={10}>
        <ContactInformaiton />
        <ContactForm />
      </ContentHolder>
      <FooterSection />
    </>
  );
}
