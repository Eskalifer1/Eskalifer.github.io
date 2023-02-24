import SlideNextButton from "components/Common/SlideNextButton";
import SlidePrevButton from "components/Common/SlidePrevButton";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FeaturedCategoriesType } from "types/swipersTypes";
import FeaturedCategory from "./FeaturedCategory";

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
          <FeaturedCategory img={item.img} title={item.title} />
        </SwiperSlide>
      ))}
      <div className="absolute top-[56%] z-20 right-1">
        <SlideNextButton />
      </div>
      <div className="absolute top-[56%] z-20 left-1">
        <SlidePrevButton />
      </div>
    </Swiper>
  );
};

export default FeaturedCategoriesSwiper;
