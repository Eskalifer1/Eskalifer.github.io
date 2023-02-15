import { ConfigProvider, Drawer, Menu } from "antd";
import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { MenuItems } from "./MenuItem";

type PropsType = {
  open: boolean;
  onClose: () => void;
};

const DrawerComponent: React.FC<PropsType> = ({ onClose, open }) => {
  return (
    <Drawer
      width={window.innerWidth > 900 ? 500 : 320}
      style={{ backgroundColor: "#F15A24" }}
      placement="right"
      onClose={onClose}
      open={open}
      closeIcon={<CloseOutlined className={" text-white text-2xl"} />}
    >
      <ConfigProvider
        theme={{
          token: {
            colorTextBase: "#fff",
            colorPrimaryTextActive: "red",
            motionDurationFast: "0",
            motionDurationMid: "100ms",
            motionDurationSlow: "200ms"
          },
          components: {
            Menu: {
              colorItemTextHover: "#000",
              colorItemTextSelected: "#fff",
              colorItemBgSelected: "#fff",
              colorItemBgHover: "#fff"
            },
          },
        }}
      >
        <Menu
          mode={"inline"}
          items={MenuItems}
          className="!border-0 bg-[#F15A24] w-full"
        />
      </ConfigProvider>
    </Drawer>
  );
};

export default DrawerComponent;
