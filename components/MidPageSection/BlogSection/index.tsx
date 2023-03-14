import { useTranslation } from "next-i18next";
import React from "react";
import { ArticleType } from "types/ArticleType";
import BlogSwiper from "./BlogSwiper";

type PropsType = {
  array: ArticleType[];
};

const BlogSection: React.FC<PropsType> = ({ array }) => {
  const { t } = useTranslation("global");
  return (
    <>
      <div className="flex p-4 justify-between items-center">
        <h2 className="font-[Chivo] text-[31px] font-bold minmd:basis-1/2 sm:text-[19px]">
          {t("global:MidPage:blogSection:blogTitle")}
        </h2>
        <div className="minmd:basis-1/2 text-end">
          <button className="py-[10px] px-[20px] bg-[#D9E6E3] rounded-[5px]">
            {t("global:MidPage:blogSection:blogTitleButton")}
          </button>
        </div>
      </div>
      <BlogSwiper array={array} slidesCount={6} />
    </>
  );
};

export default BlogSection;
