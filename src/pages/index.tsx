import React from "react";
import dynamic from "next/dynamic";
import Navigation from "components/Navigation/Navigation";
import MainPage from "components/MainPage/MainPage";
import Head from "next/head";

const FooterComponent = dynamic(
  () => import("components/Footer/FooterComponent")
);
const MidPageSection = dynamic(
  () => import("components/MidPageSection/MidPageSection")
);

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
        <Navigation isSearchShow />
        <div className="p-[20px]">
          <MainPage />
          <MidPageSection />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
