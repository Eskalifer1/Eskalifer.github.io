import HeaderComponent from "components/Layout/HeaderComponent";
import Registration from "components/Registration";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const FooterComponent = dynamic(
  () => import("components/Layout/FooterComponent")
);

const RegistrationPage = () => {
  return (
    <>
      <Head>
        <title>Registration</title>
        <meta name="description" content="Registration Page of Opus-Best" />
        <meta property="og:title" content="Opus-Best Blog Title" />
        <meta
          property="og:description"
          content="Registration Page of Opus-Best"
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.example.com/my-page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Opus-Best Blog Title" />
        <meta
          name="twitter:description"
          content="Registration Page of Opus-Best"
        />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <div style={{ backgroundColor: "#E3F6FD" }}>
        <div className="w-full mx-auto" style={{ maxWidth: 1700 }}>
          <HeaderComponent isSearchShow={false} />
          <Registration />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}; 

export default RegistrationPage;

export async function getStaticProps({ locale = "en" }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["global"])),
    },
  };
}
