import { LeftCircleFilled } from "@ant-design/icons";
import React from "react";
import { useSwiper } from "swiper/react";

type PropsType = {
  top: string;
};

const SlidePrevButton:React.FC<PropsType> = ({top}) => {
  const swiper = useSwiper();
  const buttonStyle = `absolute top-[${top}%] z-20 left-0"`;
  return (
    <div className={buttonStyle}>
      <button onClick={() => swiper.slidePrev()}>
        <LeftCircleFilled className="text-white bg-black text-[27px] rounded-[50%]" />
      </button>
    </div>
  );
}
export default SlidePrevButton;