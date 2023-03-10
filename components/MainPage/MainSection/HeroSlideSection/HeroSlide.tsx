import Image from "next/image";
import React from "react";
import { HeroSwiperType } from "types/swipersTypes";

const HeroSlide: React.FC<HeroSwiperType> = ({
  img = "",
  title = "",
  subTitle = "",
  position = "center",
}) => {
  let titleDivClass: string | undefined;
  position === "left"
    ? (titleDivClass = "justify-start items-end")
    : position === "center"
    ? (titleDivClass = "justify-center items-center text-center")
    : position === "right"
    ? (titleDivClass = "justify-end items-end text-end")
    : (titleDivClass = "justify-start items-start");

  return (
    <div
      className={`${titleDivClass} relative w-full h-[560px] p-[50px] flex sm:p-8`}
    >
      <Image
        fill
        src={img}
        alt={"Featured Category"}
        className="rounded-[10px] object-cover"
        priority
        sizes="(min-width: 1023px) 75vw,
                    (max-width: 1023px) 100vw"
      />
      <div className="font-[Chivo] text-white absolute slide-in m-1">
        <h2 className="font-bold text-[35px] mb-5 sm:text-[23px]">{title}</h2>
        <h3 className="text-[17px] sm:text-3">{subTitle}</h3>
      </div>
    </div>
  );
};

export default HeroSlide;
