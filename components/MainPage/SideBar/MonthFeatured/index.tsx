import SpaceInner from "components/Common/SpaceInner";
import { MonthFeaturedArray } from "helpers/filterArticles";
import { useTranslation } from "next-i18next";
import React from "react";
import Featured from "./Featured";

const MonthFeatured: React.FC = () => {
  const { t } = useTranslation("global");
  return (
    <div className="sticky top-0">
      <SpaceInner />
      <div className="p-4 rounded-xl font-[Chivo] bg-[#f8edeb]">
        <h2 className="font-bold text-2xl">
          {t("global:SideBar:featuredTitle")}
        </h2>
        {MonthFeaturedArray.map((item) => (
          <Featured {...item} key={item.img} />
        ))}
      </div>
    </div>
  );
};

export default MonthFeatured;
