import React from "react";
import Article from "./Article";
import { ArticleType } from "types/ArticleType";
import { Divider } from "antd";

type PropsType = {
  articlesArray: ArticleType[] | undefined;
};

const Articles: React.FC<PropsType> = ({ articlesArray }) => {
  return (
    <div className="wrap">
      <Divider className="my-10 bg-black" />
      <div className="grid gap-5 mb-5 grid-cols-[repeat(5,_minmax(150px,_1fr))] md:grid-cols-1 xl:grid-cols-[repeat(2,_minmax(330px,_1fr))]">
        {articlesArray &&
          articlesArray.map((item, index) => (
            <Article
              image={item.image}
              date={item.date}
              description={item.description}
              title={item.title}
              key={index}
              background="#fff"
            />
          ))}
      </div>
    </div>
  );
};

export default Articles;
