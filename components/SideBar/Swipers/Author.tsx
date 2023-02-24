import { Card } from "antd";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type PropsType = {
  img: string;
  name: string;
};

const Author: React.FC<PropsType> = ({ img, name }) => {
  return (
    <Link href={"#"}>
      <Card
        hoverable
        className="font-[Chivo] text-center bg-[#dcd6f7] p-1"
        style={{ padding: 0 }}
        bodyStyle={{ padding: 8 }}
      >
        <div className="relative w-full mb-2 h-[220px] p-2">
          <Image
            src={img}
            alt="Author"
            fill
            className="object-cover rounded-[10px]"
          />
        </div>
        <p className="font-bold">{name}</p>
      </Card>
    </Link>
  );
};

export default React.memo(Author);
