import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BoardHeader = () => {
  return (
    <header className="w-full h-[51px] top-[88px] left-0 bg-[#fefdf6] flex items-center justify-between px-4 z-10 sticky">
      <button className="flex items-center">
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-[5px]">
        <ChevronLeft className="w-6 h-6" />
        <span className="w-[88px] [font-family:'Julius_Sans_One-Regular',Helvetica] font-normal text-black text-2xl text-center">
          2 of 10
        </span>
        <ChevronRight className="w-6 h-6" />
      </div>
    </header>
  );
};

export default BoardHeader;