import React from "react";
import classes from "@/styles/Footer.module.css";
import Image from "next/legacy/image";
import payment from "../../assets/images/payment.png";
import {
  ArrowUpOutlined,
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { ConfigProvider, FloatButton } from "antd";

const FooterComponent: React.FC = () => {
  return (
    <>
      <footer className="wrap bg-black text-white">
        <div className="grid grid-cols-autofit xl:grid-cols-2 md:grid-cols-1">
          <div className="p-[10px] mb-5">
            <h3 className="text-xl font-[Chivo] font-normal mb-5">
              Our Work Is
            </h3>
            <p className="font-[Chivo]">
              Designed, crafted and built with WordPress, Elementor and ACF Pro.
            </p>
          </div>
          <div className="p-[10px] mb-5">
            <h3 className="text-xl font-[Chivo] font-normal mb-5">Contact</h3>
            <p className="font-[Chivo]">
              Phone: 02.62.87.59636 <br />
              Email: mail@example.com <br />
              35 Rue Michel Ange, LE HAVRE, 76610
            </p>
          </div>
          <div className="p-[10px] mb-5">
            <h3 className="text-xl font-[Chivo] font-normal mb-5">
              Secured Payment
            </h3>
            <Image src={payment} alt="Payment System" loading="lazy"/>
          </div>
          <div className="p-[10px] mb-5">
            <h3 className="text-xl font-[Chivo] font-normal mb-5">About</h3>
            <p className="font-[Chivo]">
              All Rights Reserved <br />
              Designed with ❤️ and 🧠 by RAMSTHEMES
            </p>
          </div>
        </div>
        <div className={classes.footerBottom}>
          <div>
            <p className="font-[Chivo]">Copyright © 2023 RAMSTHEMES</p>
          </div>
          <div className={`${classes.links}`}>
            <Link href={""}>
              <FacebookFilled className="text-xl font-[Chivo] m-1.5 duration-200 minmd:hover:text-blue-500" />
            </Link>
            <Link href={""}>
              <TwitterOutlined className="text-xl font-[Chivo] m-1.5 duration-200 minmd:hover:text-blue-500" />
            </Link>
            <Link href={""}>
              <InstagramOutlined className="text-xl font-[Chivo] m-1.5 duration-200 minmd:hover:text-blue-500" />
            </Link>
            <Link href={""}>
              <YoutubeOutlined className="text-xl font-[Chivo] m-1.5 duration-200 minmd:hover:text-blue-500" />
            </Link>
          </div>
        </div>
      </footer>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#F15A24",
          },
        }}
      >
        <FloatButton.BackTop
          visibilityHeight={80}
          type={"primary"}
          icon={<ArrowUpOutlined />}
        />
      </ConfigProvider>
    </>
  );
};

export default React.memo(FooterComponent);
