import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ArticleType } from "types/ArticleType";
import { articles } from "helpers/filterArticles";

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
    <div style={{ backgroundColor: "#D9E6E3" }}>
      <Navigation isSearchShow={false} />
      <SearchForm
        setMasOfArticles={setMasOfArticles}
      />
      <Articles masofArticles={masofArticles} />
      <FooterComponent />
    </div>
  );
}
