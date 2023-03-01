import Image from "next/image";
import React from "react";
import { AuthorWeekType } from "types/swipersTypes";

const WeekAuthor: React.FC<AuthorWeekType> = ({ img, title, description }) => {
  return (
    <>
      <div className="rounded-md p-[20px] bg-[#fef4eb]">
        <div className="relative h-[390px] w-full mb-4">
          <Image
            fill
            src={img}
            alt="Author of Week"
            className="rounded-md object-cover"
          />
        </div>
        <h3 className="text-[31px] text-[#E72F2F] font-bold font-[Chivo] mb-4">
          {title}
        </h3>
        <p className="text-base font-[Chivo]">{description}</p>
      </div>
    </>
  );
};

export default WeekAuthor;
