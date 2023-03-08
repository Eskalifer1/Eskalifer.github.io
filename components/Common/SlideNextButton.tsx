import { useSwiper } from "swiper/react";
import { RightCircleFilled } from "@ant-design/icons";
import React from "react";

type PropsType = {
  top: string;
};

const SlideNextButton: React.FC<PropsType> = ({ top }) => {
  const swiper = useSwiper();
  const buttonStyle = `absolute top-[${top}%] z-20 right-0`
  return (
    <div className={buttonStyle}>
      <button onClick={() => swiper.slideNext()}>
        <RightCircleFilled className="text-white bg-black text-[27px] rounded-[50%]" />
      </button>
    </div>
  );
};
export default SlideNextButton;
