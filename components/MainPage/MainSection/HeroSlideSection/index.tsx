import dynamic from "next/dynamic";
import React from "react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroSwiperType } from "types/swipersTypes";
import HeroSlide from "./HeroSlide";

const SpaceInner = dynamic(
  () => import("components/Common/SpaceInner")
);

type PropsType = {
  array: HeroSwiperType[];
};

const HeroSlideSection: React.FC<PropsType> = ({ array }) => {
  const swiperParams = {
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    slidesPerView: 1,
    modules: [Navigation, Autoplay, EffectFade],
    grabCursor: true,
    navigation: true,
  };
  return (
    <>
      <Swiper
        {...swiperParams}
        className="mb-4 heroSwiper"
        effect="fade"
      >
        {array.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSlide
              {...item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SpaceInner />
    </>
  );
};

export default HeroSlideSection;
