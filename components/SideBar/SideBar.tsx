import React from "react";
import MonthFeatured from "./MonthFeatured/MonthFeatured";
import BestAuthors from "./Swipers/BestAuthors";

const SideBar = () => {
  return (
    <div className="wrap w-1/4 lg:w-full">
      <BestAuthors />
      <MonthFeatured />
    </div>
  );
};

export default SideBar;
