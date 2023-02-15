import React, { useState } from "react";
import logo from "../../assets/images/opus-logo.svg";
import {
  LoginOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Drawer = dynamic(() => import("components/Drawer/Drawer"),{ssr: false});

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={"flex items-center justify-between wrap"}>
      <Link href="/" className="p-4 xs:py-4 xs:px-[5px]">
        <Image
          className="w-40 h-14 lg:w-32 lg:h-11 xs:w-28"
          src={logo}
          alt={"Company Logo"}
          priority
        />
      </Link>
      <div
        className={
          "p-4 flex items-center text-3xl lg:text-xl xs:py-4 xs:px-[5px]"
        }
      >
        <div className={"mr-6 xs:mr-3"}>
          <Link href={"/registration"}>
            <UserAddOutlined className="p-2 text-54595F cursor-pointer" />
          </Link>
          <Link href={"/login"}>
            <LoginOutlined className="p-2 text-54595F cursor-pointer" />
          </Link>
          <Link href={"/#"}>
            <Badge count={0} showZero>
              <ShoppingCartOutlined
                className={
                  "text-3xl text-54595F cursor-pointer minmd:hover:text-[#65686b] lg:text-2xl"
                }
              />
            </Badge>
          </Link>
        </div>
        <button className="text-[40px] lg:text-xl" onClick={showDrawer}>
          <MenuUnfoldOutlined />
        </button>
      </div>
      <Drawer onClose={onClose} open={open} />
    </div>
  );
};

export default React.memo(Navigation);
