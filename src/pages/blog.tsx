import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ArticleType } from "types/ArticleType";
import { articles } from "helpers/filterArticles";
import Head from "next/head";

const SearchForm = dynamic(() => import("components/SearchForm/SearchForm"));
const Navigation = dynamic(() => import("components/Navigation/Navigation"));
const FooterComponent = dynamic(
  () => import("components/Footer/FooterComponent")
);
const Articles = dynamic(() => import("components/Articles/Articles"));

export default function BlogPage() {
  const [masofArticles, setMasOfArticles] = useState<ArticleType[] | undefined>(
    articles
  );
  return (
    <>
      <Head>
        <title>Opus-Best Blog</title>
        <meta name="description" content="Opus - A site where you can view blogs of different people" />
        <meta property="og:title" content="Opus-Best Blog Title" />
        <meta property="og:description" content="Opus - A site where you can view blogs of different people" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.example.com/my-page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Opus-Best Blog Title" />
        <meta name="twitter:description" content="Opus - A site where you can view blogs of different people" />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <div style={{ backgroundColor: "#D9E6E3" }}>
        <Navigation isSearchShow={false} />
        <SearchForm setMasOfArticles={setMasOfArticles} />
        <Articles masofArticles={masofArticles} />
        <FooterComponent />
      </div>
    </>
  );
}
