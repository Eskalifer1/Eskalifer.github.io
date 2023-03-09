import React from "react";
import MainSection from "./MainSection";
import SideBar from "./SideBar";

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
