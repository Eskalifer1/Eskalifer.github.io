import React from "react";
import dynamic from "next/dynamic";
import Navigation from "components/Navigation/Navigation";
import MainPage from "components/MainPage/MainPage";

const FooterComponent = dynamic(
  () => import("components/Footer/FooterComponent")
);
const MidPageSection = dynamic(
  () => import("components/MidPageSection/MidPageSection")
);

export default function Home() {
  return (
    <div>
      <Navigation isSearchShow />
      <div className="p-[20px]">
        <MainPage />
        <MidPageSection />
      </div>
      <FooterComponent />
    </div>
  );
}
