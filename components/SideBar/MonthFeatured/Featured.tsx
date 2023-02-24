import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  img: string;
  title: string;
  subTitle: string;
  description: string;
};

const Featured: React.FC<PropsType> = ({
  img,
  title,
  subTitle,
  description,
}) => {
  return (
    <div className="flex minlg:items-center mt-5">
      <div className="relative h-40 m-[10px] lg:h-[312px] w-2/5 md:h-[220px] md:w-2/5 self-start">
        <Image
          src={img}
          alt="Feature"
          fill
          className="object-cover rounded-[10px]"
        />
      </div>
      <div className="font-[Chivo] p-[10px] lg:pt-6 w-3/5 md:w-3/5">
        <Link href={"#"}>
          <h3 className="text-xl font-bold mb-5 sm-[text-17px]">{title}</h3>
        </Link>
        <h4 className="text-[#54595F] text-base mb-5 font-bold">{subTitle}</h4>
        <p className="text-[#7A7A7A] text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default React.memo(Featured);
