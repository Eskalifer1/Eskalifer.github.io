import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { BookType } from "types/swipersTypes";
import BookSlide from "./BookSlide";
import dynamic from "next/dynamic";

const SlideNextButton = dynamic(
  () => import("components/Common/SlideNextButton"),
  { ssr: false }
);
const SlidePrevButton = dynamic(
  () => import("components/Common/SlidePrevButton"),
  { ssr: false }
);
const SpaceInner = dynamic(() => import("components/Common/SpaceInner"));

type PropsType = {
  array: BookType[];
  withButtons?: boolean;
  slidesCount: number;
  isSticky?: boolean;
};

const BooksSwiper: React.FC<PropsType> = ({
  array,
  withButtons = false,
  slidesCount,
  isSticky = false,
}) => {
  const swiperParams = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    modules: [Navigation, Autoplay],
  };
  return (
    <div className={isSticky ? "sticky top-0" : ""}>
      <Swiper
        {...swiperParams}
        className="mb-4"
        breakpoints={{
          1024: { slidesPerView: slidesCount },
          768: { slidesPerView: 4 },
          319: { slidesPerView: 2 },
        }}
      >
        {array.map((item, index) => (
          <SwiperSlide key={index}>
            <BookSlide {...item} withButtons={withButtons} />
          </SwiperSlide>
        ))}
        <SlideNextButton top="56" />
        <SlidePrevButton top="56" />
      </Swiper>
      <SpaceInner />
    </div>
  );
};

export default BooksSwiper;
