import { LeftCircleFilled } from "@ant-design/icons";
import { useSwiper } from "swiper/react";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <LeftCircleFilled className="text-white bg-black text-[27px] rounded-[50%]" />
    </button>
  );
}
