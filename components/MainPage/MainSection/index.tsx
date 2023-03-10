import { withTitle } from "components/HOC/withTitle";
import {
  featuredCategories,
  HeroSwiper,
  newBooksArray,
} from "helpers/filterArticles";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";

const BooksSwiper = dynamic(() => import("components/BookSwiper"));
const FeaturedCategoriesSwiper = dynamic(
  () =>
    import(
      "./../MainSection/FeaturedCategoriesSection/FeaturedCategoriesSwiper"
    )
);
const HeroSlideSection = dynamic(() => import("./HeroSlideSection"));
const MainSection: React.FC = () => {
  const BookSwiperWithTitle = withTitle(BooksSwiper);
  const FeaturedCategorieswithTitle = withTitle(FeaturedCategoriesSwiper);
  const { t } = useTranslation("global");
  return (
    <div className="wrap w-3/4 lg:w-full">
      <HeroSlideSection array={HeroSwiper} />
      <BookSwiperWithTitle
        array={newBooksArray}
        titleHead={t("global:Titles:newBooks")}
        slidesCount={6}
      />
      <BookSwiperWithTitle
        array={newBooksArray}
        titleHead={t("global:Titles:novels")}
        slidesCount={6}
      />
      <FeaturedCategorieswithTitle
        array={featuredCategories}
        titleHead={t("global:Titles:featuredCategories")}
        slidesCount={6}
      />
    </div>
  );
};

export default MainSection;
