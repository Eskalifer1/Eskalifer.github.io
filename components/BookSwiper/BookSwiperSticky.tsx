import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { BookType } from "types/swipersTypes";
import BookSlide from "./BookSlide";
import dynamic from "next/dynamic";

const SlideNextButton = dynamic(
  () => import("components/Common/SlideNextButton")
);
const SlidePrevButton = dynamic(
  () => import("components/Common/SlidePrevButton")
);
const SpaceInner = dynamic(() => import("components/Common/SpaceInner"));

type PropsType = {
  array: BookType[];
  withButtons?: boolean;
  slidesCount: number;
};

const BooksSwiperSticky: React.FC<PropsType> = ({
  array,
  withButtons = false,
  slidesCount,
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
    <div className="sticky top-0">
      <Swiper
        {...swiperParams}
        className="mb-4 h-full"
        breakpoints={{
          1024: { slidesPerView: slidesCount },
          768: { slidesPerView: 4 },
          319: { slidesPerView: 2 },
        }}
      >
        {array.map((item, index) => (
          <SwiperSlide key={index}>
            <BookSlide
              img={item.img}
              helper={item.helper}
              genre={item.genre}
              price={item.price}
              title={item.title}
              oldPrice={item.oldPrice}
              stars={item.stars}
              withButtons={withButtons}
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
    </div>
  );
};

export default BooksSwiperSticky;
