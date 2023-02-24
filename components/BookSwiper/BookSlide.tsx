import { Button, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BookType } from "types/swipersTypes";

const BookSlide: React.FC<BookType & { withButtons: boolean }> = ({
  img,
  helper,
  genre,
  title,
  price,
  oldPrice,
  stars,
  withButtons,
}) => {
  return (
    <div className="font-[Chivo] text-center p-2 flex flex-col h-auto">
      <Link href={"#"}>
        <div className="relative h-[220px] w-full mx-auto mb-3">
          <Image src={img} alt="book" fill className="rounded-md" />
          {helper === "Best Selling" || helper === "Top Rated" ? (
            <p className="absolute top-2 right-1 bg-[#A72DB8] p-1 text-white rounded-md">
              {helper}
            </p>
          ) : helper ? (
            <p className="absolute top-2 right-1 bg-[#E72F2F] p-1 text-white rounded-md">
              {helper}
            </p>
          ) : (
            ""
          )}
        </div>
      </Link>
      {genre ? <p className="text-[#0A0A0A] text-sm mb-4">{genre}</p> : ""}
      <h4 className="font-bold text-base">{title}</h4>
      {stars ? <Rate disabled value={+stars} className="mb-2" /> : ""}
      {oldPrice ? (
        <div className="flex items-center justify-center">
          <p className="line-through text-[#54595F] opacity-60 mr-1">
            ${oldPrice}
          </p>
          <p className="text-[#54595F]">${price}</p>
        </div>
      ) : (
        <p className="text-[#54595F]">${price}</p>
      )}
      {withButtons ? (
        <button className="mt-2 py-[15px] px-[28px] rounded-md leading-4 font-[Chivo] bg-black text-white minmd:hover:text-[#FECE30]">
          Add to Card
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default React.memo(BookSlide);