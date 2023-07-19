import React from "react";
import "../PagesStyle/CredentialsPage.css";
import Navbar from "../Shared/Navbar";
import ContentHolder from "../Shared/ContentHolder";
import MyCard from "../Component/Credentials/MyCard";
import CredentailSection from "../Component/Credentials/CredentailSection";
export default function CredentialsPage() {
  return (
    <>
      <Navbar />
      <ContentHolder gapValue={10}>
        <div className="sticky-view">
          <MyCard />
        </div>
        <CredentailSection />
      </ContentHolder>
    </>
  );
}
