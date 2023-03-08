import Link from "next/link";
import React from "react";

type PropsType = {
    href?: string
    Component: any
}

const FooterLink:React.FC<PropsType> = ({href = "", Component}) => {
  return (
    <Link href={href}>
      <Component className="text-xl font-[Chivo] m-1.5 duration-200 minmd:hover:text-blue-500" />
    </Link>
  );
};

export default FooterLink;
