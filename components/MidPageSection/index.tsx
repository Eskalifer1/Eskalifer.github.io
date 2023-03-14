import { withTitle } from "components/HOC/withTitle";
import {
  articles,
  newBooksArray,
  WeekAuthorArray,
} from "helpers/filterArticles";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";

const WeekAuthor = dynamic(() => import("./WeekAuthor"));
const BooksSwiper = dynamic(() => import("components/BookSwiper"));
const SpaceInner = dynamic(() => import("components/Common/SpaceInner"));
const BlogSection = dynamic(() => import("./BlogSection"));

const MidPageSection = () => {
  const BooksSwiperStickywithTitle = withTitle(BooksSwiper);
  const WeekAuthorwithTitle = withTitle(WeekAuthor);
  const { t } = useTranslation("global");
  return (
    <>
      <div className="flex w-full lg:block">
        <div className="wrap w-1/2 lg:w-full">
          <WeekAuthorwithTitle
            titleHead={t("global:Titles:bestAuthor")}
            img={WeekAuthorArray.img}
            title={WeekAuthorArray.title}
            description={WeekAuthorArray.description}
          />
        </div>
        <div className="wrap w-1/2 lg:w-full">
          <BooksSwiperStickywithTitle
            titleHead={t("global:Titles:bestBooks")}
            array={newBooksArray}
            slidesCount={4}
            withButtons
            isSticky
          />
        </div>
      </div>
      <SpaceInner />
      <BlogSection array={articles} />
    </>
  );
};

export default MidPageSection;
