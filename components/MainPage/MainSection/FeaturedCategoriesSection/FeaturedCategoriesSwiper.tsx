import dynamic from "next/dynamic";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FeaturedCategoriesType } from "types/swipersTypes";
import FeaturedCategory from "./FeaturedCategory";

const SlideNextButton = dynamic(
  () => import("components/Common/SlideNextButton"),
  { ssr: false }
);
const SlidePrevButton = dynamic(
  () => import("components/Common/SlidePrevButton"),
  { ssr: false }
);

type PropsType = {
  slidesCount: number;
  array: FeaturedCategoriesType[];
};

const FeaturedCategoriesSwiper: React.FC<PropsType> = ({
  slidesCount,
  array,
}) => {
  const swiperParams = {
    loop: false,
    spaceBetween: 10,
    slidesPerView: slidesCount,
    modules: [Navigation],
  };
  return (
    <Swiper
      {...swiperParams}
      className="mb-4"
      breakpoints={{
        1224: { slidesPerView: 6 },
        768: { slidesPerView: 4 },
        319: { slidesPerView: 2 },
      }}
    >
      {array.map((item, index) => (
        <SwiperSlide key={index}>
          <FeaturedCategory {...item} />
        </SwiperSlide>
      ))}
      <SlideNextButton top="56" />
      <SlidePrevButton top="56" />
    </Swiper>
  );
};

export default FeaturedCategoriesSwiper;
