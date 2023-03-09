import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  img: string;
  title: string;
};

const FeaturedCategory: React.FC<PropsType> = ({ img = "", title = "" }) => {
  return (
    <div className="font-[Chivo] text-center">
      <div className="relative w-full h-0 mb-4 pb-[100%]">
        <Link href={"#"}>
          <Image
            src={img}
            alt={"Featured Category"}
            className="rounded-md mx-auto"
            fill
            sizes="(max-width: 768px) 45vw,
              (max-width: 1024px) 22vw,
              (max-width: 1224px) 16vw,
              12vw"
          />
        </Link>
      </div>
      <h3 className="text-base font-bold">{title}</h3>
    </div>
  );
};

export default React.memo(FeaturedCategory);
