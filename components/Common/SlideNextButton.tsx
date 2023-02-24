import { useSwiper } from "swiper/react";
import { RightCircleFilled } from "@ant-design/icons";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <RightCircleFilled className="text-white bg-black text-[27px] rounded-[50%]"/>
    </button>
  );
}
