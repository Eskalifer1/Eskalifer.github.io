import React, { useState } from "react";
import dynamic from "next/dynamic";
import NavigationButtons from "./NavigationButtons";
import OpusLogo from "components/Common/OpusLogo";

const Drawer = dynamic(() => import("components/Drawer"), {
  ssr: false,
});
const NavigationSearch = dynamic(() => import("./NavigationSearch"), {
  ssr: false,
});
type PropsType = {
  isSearchShow: boolean;
};

const Navigation: React.FC<PropsType> = ({ isSearchShow }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className={
          "flex items-center justify-between wrap h-[120px] xs:h-[180px] xs:flex-wrap"
        }
      >
        <OpusLogo />
        {isSearchShow ? (
          <div className="md:hidden m-4 basis-1/3">
            <NavigationSearch />
          </div>
        ) : null}
        <NavigationButtons showDrawer={showDrawer} />
        <Drawer onClose={onClose} open={open} />
      </div>
      {isSearchShow ? (
        <div className="minmd:hidden md:block m-4 basis-full">
          <NavigationSearch />
        </div>
      ) : null}
    </>
  );
};

export default React.memo(Navigation);
