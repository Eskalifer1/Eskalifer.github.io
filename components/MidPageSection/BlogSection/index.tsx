import React from "react";
import { ArticleType } from "types/ArticleType";
import BlogSwiper from "./BlogSwiper";

type PropsType = {
  array:ArticleType[]
}

const BlogSection:React.FC<PropsType> = ({array}) => {
  return (
    <>
      <div className="flex p-4 justify-between items-center">
        <h2 className="font-[Chivo] text-[31px] font-bold minmd:basis-1/2 sm:text-[19px]">
          Blog
        </h2>
        <div className="minmd:basis-1/2 text-end">
          <button className="py-[10px] px-[20px] bg-[#D9E6E3] rounded-[5px]">All news</button>
        </div>
      </div>
      <BlogSwiper array={array} slidesCount={6}/>
    </>
  );
};

export default BlogSection;
