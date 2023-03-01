import FooterComponent from "components/Footer/FooterComponent";
import Navigation from "components/Navigation/Navigation";
import Registration from "components/Registration/Registration";
import Head from "next/head";
import React from "react";

const RegistrationPage = () => {
  return (
    <>
    <Head>
        <title>Registration</title>
        <meta name="description" content="Registration Page of Opus-Best" />
        <meta property="og:title" content="Opus-Best Blog Title" />
        <meta property="og:description" content="Registration Page of Opus-Best" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.example.com/my-page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Opus-Best Blog Title" />
        <meta name="twitter:description" content="Registration Page of Opus-Best" />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <div style={{ backgroundColor: "#E3F6FD" }}>
        <Navigation isSearchShow={false} />
        <Registration />
        <FooterComponent />
      </div>
    </>
  );
};

export default RegistrationPage;
