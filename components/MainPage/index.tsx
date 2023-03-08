import SideBar from "components/SideBar";
import React from "react";
import MainSection from "./MainSection";

const MainPage = () => {
  return (
    <div>
      <div className="flex lg:block">
        <MainSection />
        <SideBar />
      </div>
    </div>
  );
};

export default MainPage;
