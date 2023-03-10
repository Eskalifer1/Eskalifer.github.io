import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ArticleType } from "types/ArticleType";
import { articles } from "helpers/filterArticles";
import Head from "next/head";
import HeaderComponent from "components/Layout/HeaderComponent";

const SearchForm = dynamic(() => import("components/SearchForm"));
const FooterComponent = dynamic(
  () => import("components/Layout/FooterComponent")
);
const Articles = dynamic(() => import("components/Articles"));

export default function BlogPage() {
  const [articlesArray, setArticlesArray] = useState<ArticleType[] | undefined>(
    articles
  );
  return (
    <>
      <Head>
        <title>Opus-Best Blog</title>
        <meta
          name="description"
          content="Opus - A site where you can view blogs of different people"
        />
        <meta property="og:title" content="Opus-Best Blog Title" />
        <meta
          property="og:description"
          content="Opus - A site where you can view blogs of different people"
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.example.com/my-page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Opus-Best Blog Title" />
        <meta
          name="twitter:description"
          content="Opus - A site where you can view blogs of different people"
        />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <div style={{ backgroundColor: "#D9E6E3" }}>
        <div className="w-full mx-auto" style={{ maxWidth: 1700 }}>
          <HeaderComponent isSearchShow={false} />
          <SearchForm setArticlesArray={setArticlesArray} />
          <Articles articlesArray={articlesArray} />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
