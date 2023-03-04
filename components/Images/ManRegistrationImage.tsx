import React from "react";
import Image from "next/image";
import registerImage from "../../assets/images/registration.jpg";

const ManRegistrationImage = () => {
  return (
    <div className="h-[600px] w-full relative m-4 basis-1/2 md:basis-0 md:m-0 lg:h-[500px]">
      <Image
        src={registerImage}
        alt="Registration Image"
        priority
        className={"object-cover rounded-[10px] md:none"}
        quality={60}
        fill
        sizes="(max-width: 767px) 0vw,
       (min-width: 767px) 50vw"
      />
    </div>
  );
};

export default ManRegistrationImage;
