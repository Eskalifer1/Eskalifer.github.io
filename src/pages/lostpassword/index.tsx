import { NextPage } from "next";
import React from "react";
import LostPassword from "components/LostPassword";
import Head from "next/head";
import dynamic from "next/dynamic";
import HeaderComponent from "components/Layout/HeaderComponent";

const FooterComponent = dynamic(
  () => import("components/Layout/FooterComponent")
);

const LostPasswordPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lost Password</title>
        <meta name="description" content="Lost Password Page of Opus-Best" />
        <meta property="og:title" content="Opus-Best Blog Title" />
        <meta
          property="og:description"
          content="Lost Password Page of Opus-Best"
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.example.com/my-page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Opus-Best Blog Title" />
        <meta
          name="twitter:description"
          content="Lost Password Page of Opus-Best"
        />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <div className="bg-[#D9D6DE]">
        <div className="w-full mx-auto" style={{ maxWidth: 1700 }}>
          <HeaderComponent isSearchShow={false} />
          <LostPassword />
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

export default LostPasswordPage;
