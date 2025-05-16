import React from "react";
import NavPanel from "../NavPanel";
import ReturnBoardButton from "../ReturnBoardButton";

const BoardHeader = () => {
  return (
    <header className="w-full h-[51px] top-[88px] left-0 bg-[#fefdf6] flex items-center justify-between px-4 z-10 sticky">
      <ReturnBoardButton />
      <NavPanel />
    </header>
  );
};

export default BoardHeader;
