"use client";

import ItemBidCard from "@/components/common/board/ItemBidCard";
import ItemInfo from "@/components/common/board/ItemInfo";
import ItemInfoTabs from "@/components/common/board/ItemInfoTabs";
import { useSearchParams } from "next/navigation";

import React from "react";

export default function DetailPageUI() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const content = searchParams.get("content");
  const startPrice = searchParams.get("start_price");
  const instantPrice = searchParams.get("instant_price");
  const endDate = searchParams.get("end_date");
  const isSold = searchParams.get("is_sold");

  return (
    <div className="relative w-full min-h-screen px-4">
      <div className="pt-[5vh] flex flex-col items-center gap-y-10 xl:flex-row justify-evenly ">
        <ItemInfo />
        {/* 이미지 썸네일부분 */}
        <ItemBidCard
          title={title}
          content={content}
          startPrice={startPrice}
          instantPrice={instantPrice}
          endDate={endDate}
          isSold={isSold}
        />
        {/* 입찰 내용 */}
      </div>
      <ItemInfoTabs data={{ content }} />
      {/* 입찰 댓글.제품설명.QnA */}
    </div>
  );
}
