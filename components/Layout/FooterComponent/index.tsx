import React from "react";
import classes from "@/styles/Footer.module.css";
import Image from "next/legacy/image";
import {
  ArrowUpOutlined,
} from "@ant-design/icons";
import { ConfigProvider, FloatButton } from "antd";
import { footerArray } from "./footerArray";
import FooterLinks from "./FooterLinks";
import { i18n, useTranslation } from "next-i18next";

const FooterComponent: React.FC = () => {
  const {t} = useTranslation();
  return (
    <>
      <footer className="wrap bg-black text-white">
        <div className="grid grid-cols-autofit xl:grid-cols-2 md:grid-cols-1">
          {footerArray.map((item, index) => (
            <div className="p-[10px] mb-5" key={index}>
              <h2 className="text-xl font-[Chivo] font-normal mb-5">
                {t(item.title)}
              </h2>
              {item.description && (
                <p className="font-[Chivo]">{t(item.description)}</p>
              )}
              {item.image && (
                <Image src={item.image.src} alt={item.image.alt} loading="lazy" />
              )}
            </div>
          ))}
        </div>
        <div className={classes.footerBottom}>
          <div className="flex items-center">
            <p className="font-[Chivo]">Copyright © 2023 RAMSTHEMES</p>
          </div>
          <div className={`${classes.links}`}>
            <FooterLinks />
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
