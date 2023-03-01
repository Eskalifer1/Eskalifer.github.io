import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  img: string;
  title: string;
};

const FeaturedCategory: React.FC<PropsType> = ({ img, title }) => {
  return (
    <div className="font-[Chivo] text-center">
      <div className="relative w-[125px] h-[125px] mb-4 mx-auto">
        <Link href={"#"}>
          <Image
            src={img}
            alt={"Featured Category"}
            className="rounded-md mx-auto"
            fill
            sizes="100vw"
          />
        </Link>
      </div>
        <h3 className="text-base font-bold">{title}</h3>
    </div>
  );
};

export default React.memo(FeaturedCategory);
