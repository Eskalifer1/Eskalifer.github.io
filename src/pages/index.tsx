import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import MainPage from "components/MainPage";
import HeaderComponent from "components/Layout/HeaderComponent";

const FooterComponent = dynamic(
  () => import("components/Layout/FooterComponent")
);
const MidPageSection = dynamic(() => import("components/MidPageSection"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Opus-Best Main</title>
        <meta
          name="description"
          content="Opus - A site where you can find your favorite books"
        />
        <meta property="og:title" content="Opus-Best Blog Title" />
        <meta
          property="og:description"
          content="Opus - A site where you can find your favorite books"
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.example.com/my-page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Opus-Best Blog Title" />
        <meta
          name="twitter:description"
          content="Opus - A site where you can find your favorite books"
        />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <div>
        <div className="w-full mx-auto" style={{ maxWidth: 1700 }}>
          <HeaderComponent isSearchShow />
          <div className="p-[20px]">
            <MainPage />
            <MidPageSection />
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
