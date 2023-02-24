import SpaceInner from "components/Common/SpaceInner";
import React from "react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroSwiperType } from "types/swipersTypes";
import HeroSlide from "./HeroSlide";

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
        onSlideChange={() => {
          //@ts-ignore
          document.querySelector(".slide-in").classList.remove("initial");
        }}
        onSlideChangeTransitionEnd={() => {
          //@ts-ignore
          document.querySelector(".slide-in").classList.add("initial");
        }}
      >
        {array.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSlide
              img={item.img}
              title={item.title}
              subTitle={item.subTitle}
              position={item.position}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SpaceInner />
    </>
  );
};

export default HeroSlideSection;
