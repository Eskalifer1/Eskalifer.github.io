import Link from "next/link";
import React from "react";
import {
  LoginOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";

type PropsType = {
  showDrawer: () => void;
};

const NavigationButtons: React.FC<PropsType> = ({ showDrawer }) => {
  return (
    <div className="p-4 flex items-center text-3xl lg:text-xl xs:py-4 xs:px-[5px]">
      <div className={"mr-6 xs:mr-3 flex items-center"}>
        <Link href={"/registration"}>
          <UserAddOutlined className="p-2 text-54595F cursor-pointer" />
        </Link>
        <Link href={"/login"}>
          <LoginOutlined className="p-2 text-54595F cursor-pointer" />
        </Link>
        <Link href={"/#"} className="block w-[30px] h-5">
          <Badge count={1} className="w-[30px] h-5 flex items-center">
            <ShoppingCartOutlined
              className={
                "text-3xl text-54595F cursor-pointer minmd:hover:text-[#65686b] lg:text-2xl -mt-1"
              }
            />
          </Badge>
        </Link>
      </div>
      <button className="text-[40px] lg:text-xl flex" onClick={showDrawer}>
        <MenuUnfoldOutlined />
      </button>
    </div>
  );
};

export default NavigationButtons;
