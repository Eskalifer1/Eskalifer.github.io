import { NextPage } from "next";
import React from "react";
import HeaderComponent from "Layout/HeaderComponent";
import LoginForm from "components/LoginForm";
import Head from "next/head";
import dynamic from "next/dynamic";

const FooterComponent = dynamic(() => import("Layout/FooterComponent"));

const LoginPage: NextPage = () => {
  return (
    <>
    <Head>
        <title>Login</title>
        <meta name="description" content="Login Page of Opus-Best" />
        <meta property="og:title" content="Opus-Best Blog Title" />
        <meta property="og:description" content="Login Page of Opus-Best" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.example.com/my-page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Opus-Best Blog Title" />
        <meta name="twitter:description" content="Login Page of Opus-Best" />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <div style={{ backgroundColor: "#D9D6DE" }}>
        <HeaderComponent isSearchShow={false} />
        <LoginForm />
        <FooterComponent />
      </div>
    </>
  );
};

export default LoginPage;
