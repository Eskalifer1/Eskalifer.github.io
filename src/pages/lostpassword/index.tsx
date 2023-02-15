import { NextPage } from "next";
import React from "react";
import Navigation from "components/Navigation/Navigation";
import FooterComponent from "components/Footer/FooterComponent";
import LostPasswordForm from "components/LostPassword/LostPasswordForm";

const LostPasswordPage: NextPage = () => {
  return (
    <div className="bg-[#D9D6DE]">
      <Navigation />
      <LostPasswordForm />
      <FooterComponent />
    </div>
  );
};

export default LostPasswordPage;
