import BooksSwiper from "components/BookSwiper/BooksSwiper";
import { withTitle } from "components/HOC/withTitle";
import {
  featuredCategories,
  HeroSwiper,
  newBooksArray,
} from "helpers/filterArticles";
import React from "react";
import FeaturedCategoriesSwiper from "./MainSection/FeaturedCategoriesSection/FeaturedCategoriesSwiper";
import HeroSlideSection from "./MainSection/HeroSlideSection/HeroSlideSection";

const MainSection: React.FC = () => {
  const BookSwiperWithTitle = withTitle(BooksSwiper);
  const FeaturedCategorieswithTitle = withTitle(FeaturedCategoriesSwiper);
  return (
    <div className="wrap w-3/4 lg:w-full">
      <HeroSlideSection array={HeroSwiper} />
      <BookSwiperWithTitle
        array={newBooksArray}
        titleHead={"New Books"}
        slidesCount={6}
      />
      <BookSwiperWithTitle
        array={newBooksArray}
        titleHead={"Novels"}
        slidesCount={6}
      />
      <FeaturedCategorieswithTitle
        array={featuredCategories}
        titleHead={"Featured Categories"}
        slidesCount={6}
      />
    </div>
  );
};

export default MainSection;
