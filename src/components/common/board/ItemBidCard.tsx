"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { useBoardItemList } from "@/store/store";
import React, { useEffect, useState } from "react";

// ✅ props 타입 명확하게 정의
interface ItemBidCardProps {
  postId: number;
  title: string;
  content: string;
  startPrice: number;
  instantPrice: number;
  endDate: string;
  isSold: string;
}

const ItemBidCard = ({
  postId,
  title,
  startPrice,
  instantPrice,
  endDate,
  isSold,
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
          현재 상태 :&nbsp;&nbsp;{isSold}
        </div>

        <Separator className="absolute top-[277px] w-[428px] bg-[#cccccc] left-0" />

        <div className="absolute top-[295px] left-[33px] font-normal text-black text-2xl">
          입찰
        </div>

        <div className="absolute w-[399px] h-[115px] top-[349px] left-[19px]">
          <div className="absolute w-[395px] h-[50px] bg-[#efefef] rounded-[5px] flex items-center">
            <Input
              className="h-[50px] bg-[#efefef] border-none pl-7 text-2xl"
              placeholder="입찰 가격"
              value={bidPrice}
              onChange={(e) => setBidPrice(e.target.value)}
            />
          </div>

          <div className="absolute w-[395px] h-[50px] top-[65px] left-0 bg-[#efefef] rounded-[5px] flex items-center">
            <Input
              className="h-[50px] bg-[#efefef] border-none pl-7 text-2xl"
              placeholder="입찰 코멘트"
              value={bidComment}
              onChange={(e) => setBidComment(e.target.value)}
            />
          </div>
        </div>

        <div className="absolute w-[202px] h-[49px] top-[484px] left-[116px]">
          <Button className="w-[200px] h-[49px] bg-[#353333] rounded-[16.47px] text-white text-[23.1px] hover:bg-[#252323]">
            입찰하기
          </Button>
        </div>

        <Separator className="absolute top-[553px] w-[428px] bg-[#cccccc] left-0" />

        <div className="flex items-center gap-1.5 absolute top-[567px] left-[255px]">
          <Edit className="w-6 h-6" />
          <button
            onClick={onClickEdit}
            className="relative font-normal text-uusj-theme-schemes-outline text-xl underline"
          >
            게시물 수정
          </button>
        </div>

        <AlertTriangle className="absolute w-[25px] h-[25px] top-[566px] left-[402px] text-red-500" />
      </CardContent>
    </Card>
  );
};

export default ItemBidCard;
