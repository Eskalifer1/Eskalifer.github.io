import payment from "assets/images/payment.png";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { i18n } from "next-i18next";

export const footerArray = [
  {
      title: i18n?.isInitialized ? i18n?.t("global:Footer:FirstBlock:title"): "",
      description: i18n?.isInitialized ? i18n?.t("global:Footer:FirstBlock:description"): "",
  }
  // {
  //   title: i18n?.isInitialized ? i18n?.t("global:Footer:FirstBlock:title"): "",
  //   description: i18n?.t("global:Footer:FirstBlock:description"),
  // },
  // {
  //   title: i18n?.t("global:Footer:SecondBlock:title"),
  //   description: i18n?.t("global:Footer:SecondBlock:description"),
  // },
  // {
  //   title: i18n?.t("global:Footer:ThirdBlock:title"),
  //   description: "",
  //   image: {
  //     src: payment,
  //     alt: "Payment System"
  //   },
  // },
  // {
  //   title: i18n?.t("global:Footer:FourthBlock:title"),
  //   description: i18n?.t("global:Footer:FourthBlock:description")
  // },
];
export const linksArray = [
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
];
