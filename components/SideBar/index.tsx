import React from "react";
import MonthFeatured from "./MonthFeatured";
import BestAuthors from "./BestAuthors";

const SideBar = () => {
  return (
    <div className="wrap w-1/4 lg:w-full">
      <BestAuthors />
      <MonthFeatured />
    </div>
  );
};

export default SideBar;
