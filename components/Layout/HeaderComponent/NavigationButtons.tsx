import Link from "next/link";
import React from "react";
import {
  LoginOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import LocalesButtons from "./LocalesButtons";

type PropsType = {
  showDrawer: () => void;
};

const NavigationButtons: React.FC<PropsType> = ({ showDrawer }) => {
  return (
    <div className="p-4 flex items-center text-3xl lg:text-xl xs:py-4 xs:px-[5px]">
      <LocalesButtons />
      <div className={"mr-6 flex items-center"}>
        <Link href={"/registration"}>
          <UserAddOutlined className="p-2 text-54595F cursor-pointer xs:text-3xl" />
        </Link>
        <Link href={"/login"}>
          <LoginOutlined className="p-2 text-54595F cursor-pointer xs:text-3xl" />
        </Link>
        <Link href={"/#"} className="block w-[30px] h-5">
          <Badge count={1} className="w-[30px] h-5 flex items-center">
            <ShoppingCartOutlined
              className={
                "text-3xl text-54595F cursor-pointer minmd:hover:text-[#65686b] lg:text-2xl xs:text-3xl"
              }
            />
          </Badge>
        </Link>
      </div>
      <button className="text-[40px] lg:text-2xl flex xs:text-3xl" onClick={showDrawer}>
        <MenuUnfoldOutlined />
      </button>
    </div>
  );
};

export default NavigationButtons;
