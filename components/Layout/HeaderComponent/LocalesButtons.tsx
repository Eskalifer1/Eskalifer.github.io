import { useRouter } from "next/router";
import React from "react";

const LocalesButtons = () => {
  const { locales, locale, push, pathname, query } = useRouter();
  const handleClick = (l: string) => () => {
    push({pathname, query}, undefined, { locale: l });
  };
  return (
    <div className="flex items-center">
      {locales?.map((l) => (
        <button
          key={l}
          onClick={handleClick(l)}
          className="text-2xl border-2 text-54595F p-1 m-1 rounded-md !leading-tight border-[#54595F] md:border md:text-lg xs:text-2xl"
        >
          {l}
        </button>
      ))}
    </div>
  );
};

export default LocalesButtons;
