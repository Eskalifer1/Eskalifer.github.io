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
      <div className="relative self-start h-0 w-2/5 pb-[50%] m-[10px] sm:w-2/5 xs:pb-[100%] sm:pb-[50%] lg:pb-[29%] lg:w-[20%] minlg:pb-[80%] minxl:!pb-[50%]">
        <Image
          src={img}
          alt="Feature"
          fill
          className="object-contain rounded-[10px] sm:object-cover minlg:object-cover minxl:!object-contain"
          sizes="(max-width: 768px) 25vw,
              (max-width: 1024px) 33vw,
              12vw"
        />
      </div>
      <div className="font-[Chivo] p-[10px] w-3/5 sm:w-3/5 md:w-[80%]">
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
