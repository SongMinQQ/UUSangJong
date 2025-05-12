"use client";

import ItemBidCard from "@/components/common/board/ItemBidCard";
import ItemInfo from "@/components/common/board/ItemInfo";
import ItemInfoTabs from "@/components/common/board/ItemInfoTabs";
import { useParams } from "next/navigation";
import React from "react";
const ContentDetailPage = () => {
  const { postId } = useParams();
  //테스트용
  const fixed = 1;

  return (
    <div className="relative w-full min-h-screen px-4">
      <div className="pt-[5vh] flex flex-col items-center gap-y-10 xl:flex-row justify-evenly ">
        <ItemInfo />
        <ItemBidCard postId={fixed} />
      </div>
      <ItemInfoTabs postId={fixed} />
    </div>
  );
};

export default ContentDetailPage;
