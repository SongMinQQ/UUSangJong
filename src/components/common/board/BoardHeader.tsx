import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavPanel from "../NavPanel";

const BoardHeader = () => {
  return (
    <header className="w-full h-[51px] top-[88px] left-0 bg-[#fefdf6] flex items-center justify-between px-4 z-10 sticky">
      <button className="flex items-center">
        <ChevronLeft className="w-5 h-5" />
      </button>

      <NavPanel />
    </header>
  );
};

export default BoardHeader;
