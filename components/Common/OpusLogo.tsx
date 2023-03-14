import Link from "next/link";
import React from "react";
import logo from "../../assets/images/opus-logo.svg";
import Image from "next/image";

const OpusLogo = () => {
  return (
    <Link href="/" className="p-4 sm:px-1">
      <Image
        className="w-40 h-14 lg:w-32 lg:h-11 xs:w-28"
        src={logo}
        alt={"Company Logo"}
        priority
      />
    </Link>
  );
};

export default OpusLogo;
