import React from "react";
import { linksArray } from "../footerArray";
import FooterLink from "./FooterLink";

const FooterLinks = () => {
  return (
    <>
      {linksArray.map((link, index) => (
        <FooterLink Component={link} key={index}/>
      ))}
    </>
  );
};

export default FooterLinks;
