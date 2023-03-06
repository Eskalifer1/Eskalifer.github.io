import { withTitle } from "components/HOC/withTitle";
import {
  articles,
  newBooksArray,
  WeekAuthorArray,
} from "helpers/filterArticles";
import dynamic from "next/dynamic";
import React from "react";

const WeekAuthor = dynamic(() => import("./WeekAuthor/WeekAuthor"));
const BooksSwiperSticky = dynamic(() => import("components/BookSwiper/BookSwiperSticky"));
const SpaceInner = dynamic(() => import("components/Common/SpaceInner"));
const BlogSection = dynamic(() => import("./BlogSection/BlogSection"));

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
