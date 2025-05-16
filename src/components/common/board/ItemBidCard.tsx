"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { useBoardItemList } from "@/store/store";
import React, { useEffect, useState } from "react";
import { DialogReport } from "@/components/ui/dialogReport";
import BidToPost from "./BidToPost";

// ✅ props 타입 명확하게 정의
interface ItemBidCardProps {
  postId: number;
  title: string;
  content: string;
  startPrice: number;
  instantPrice: number;
  endDate: string;
  isSold: string;
  userId: number;
}

const ItemBidCard = ({
  postId,
  title,
  startPrice,
  instantPrice,
  endDate,
  isSold,
  userId,
}: ItemBidCardProps) => {
  const router = useRouter();
  const { setCurrentId } = useBoardItemList();

  useEffect(() => {
    setCurrentId(postId);
  }, [postId, setCurrentId]);

  const [bidPrice, setBidPrice] = useState("");
  const [bidComment, setBidComment] = useState("");

  const onClickEdit = () => {
    router.push(`/board/${postId}/edit`);
  };
  console.log(instantPrice);

  return (
    <Card className="w-[90vw] max-w-[440px] h-[75vh] mt-[6vh] lg:mt-[84px] lg:mr-[39px] border-none shadow-none">
      <CardContent className="p-0 relative">
        <div className="absolute top-0 left-[33px] font-light text-black text-base whitespace-nowrap">
          종료일: {endDate}
        </div>

        <h1 className="absolute w-[249px] top-[26px] left-[33px] font-bold text-black text-[32px] whitespace-nowrap">
          {title}
        </h1>

        <Separator className="absolute top-24 w-[428px] bg-[#cccccc] left-0" />

        <div className="absolute top-[123px] left-[34px] font-light text-black text-2xl">
          즉시 구매가 :&nbsp;&nbsp; {instantPrice}
        </div>

        <div className="absolute top-[173px] left-[33px] font-light text-black text-2xl">
          시작가 :&nbsp;&nbsp;{startPrice}
        </div>

        <div className="absolute top-[222px] left-[33px] font-light text-black text-2xl">
          현재 상태 :&nbsp;&nbsp;
          {isSold === "on_sale" ? "판매중" : isSold === "sold_out" ? "판매 완료" : "판매 취소"}
        </div>

        <Separator className="absolute top-[277px] w-[428px] bg-[#cccccc] left-0" />

        <div className="absolute top-[295px] left-[33px] font-normal text-black text-2xl">입찰</div>

        <BidToPost postId={postId} />

        <Separator className="absolute top-[553px] w-[428px] bg-[#cccccc] left-0" />

        <div className="flex items-center gap-1.5 absolute top-[567px] left-[255px]">
          <Edit className="w-6 h-6" />
          <button
            onClick={onClickEdit}
            className="relative font-normal text-uusj-theme-schemes-outline text-xl underline"
          >
            게시물 수정
          </button>

          <DialogReport postId={postId} reportedUserId={userId} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemBidCard;
