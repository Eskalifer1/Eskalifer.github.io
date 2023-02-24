import Article from "components/Articles/Article";
import SlideNextButton from "components/Common/SlideNextButton";
import SlidePrevButton from "components/Common/SlidePrevButton";
import SpaceInner from "components/Common/SpaceInner";
import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArticleType } from "types/ArticleType";

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
            <Article
              image={item.image}
              date={item.date}
              description={item.description}
              title={item.title}
              bg="#f0f0f4"
            />
          </SwiperSlide>
        ))}
        <div className="absolute top-[56%] z-20 right-1">
          <SlideNextButton />
        </div>
        <div className="absolute top-[56%] z-20 left-1">
          <SlidePrevButton />
        </div>
      </Swiper>
      <SpaceInner />
    </>
  );
};

export default BlogSwiper;
