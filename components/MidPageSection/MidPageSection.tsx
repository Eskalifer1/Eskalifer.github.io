import BooksSwiperSticky from "components/BookSwiper/BookSwiperSticky";
import SpaceInner from "components/Common/SpaceInner";
import { withTitle } from "components/HOC/withTitle";
import {
  articles,
  newBooksArray,
  WeekAuthorArray,
} from "helpers/filterArticles";
import React from "react";
import BlogSection from "./BlogSection/BlogSection";
import WeekAuthor from "./WeekAuthor/WeekAuthor";

const MidPageSection = () => {
  const BooksSwiperStickywithTitle = withTitle(BooksSwiperSticky);
  const WeekAuthorwithTitle = withTitle(WeekAuthor);
  return (
    <>
      <div className="flex w-full lg:block">
        <div className="wrap w-1/2 lg:w-full">
          <WeekAuthorwithTitle
            titleHead="Best Author"
            img={WeekAuthorArray.img}
            title={WeekAuthorArray.title}
            description={WeekAuthorArray.description}
          />
        </div>
        <div className="wrap w-1/2 lg:w-full">
          <BooksSwiperStickywithTitle
            titleHead="Best Books"
            array={newBooksArray}
            slidesCount={4}
            withButtons
          />
        </div>
      </div>
      <SpaceInner />
      <BlogSection array={articles} />
    </>
  );
};

export default MidPageSection;
