import React from "react";
import Image from "next/image";
import loginImage from "../../assets/images/loginPhoto.png";

const BooksImage = () => {
  return (
    <div className="h-[600px] w-full relative m-4 basis-1/2 md:basis-0 md:m-0 lg:h-[500px]">
      <Image
        src={loginImage}
        alt="login Image"
        priority
        className="object-cover rounded-[10px] md:none"
        quality={60}
        fill
        sizes="(max-width: 767px) 0vw,
       (min-width: 767px) 50vw"
      />
    </div>
  );
};

export default BooksImage;
