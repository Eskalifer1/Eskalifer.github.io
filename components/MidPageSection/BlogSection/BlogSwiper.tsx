import Article from "components/Articles/Article";
import dynamic from "next/dynamic";
import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArticleType } from "types/ArticleType";

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
  array: ArticleType[];
  slidesCount: number;
};

const BlogSwiper: React.FC<PropsType> = ({ array, slidesCount }) => {
  const swiperParams = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    modules: [Navigation, Autoplay],
  };
  return (
    <>
      <Swiper
        {...swiperParams}
        className="mb-4"
        breakpoints={{
          1224: { slidesPerView: slidesCount },
          1023: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          319: { slidesPerView: 1 },
        }}
      >
        {array.map((item, index) => (
          <SwiperSlide key={index}>
            <Article {...item} background="#f0f0f4" />
          </SwiperSlide>
        ))}
        <SlideNextButton top="56" />
        <SlidePrevButton top="56" />
      </Swiper>
      <SpaceInner />
    </>
  );
};

export default BlogSwiper;
