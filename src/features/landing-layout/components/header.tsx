import React from "react";
import Logo from "./logo";
import MainMenu from "./main-menu";
import SearchBox from "./search-box";

const LayoutHeader = () => {
  return (
    <header className="h-[100px] py-8 sticky top-0 bg-white z-30">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo className="w-[158px] h-[36px]" />
          <MainMenu />
          <SearchBox />
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
