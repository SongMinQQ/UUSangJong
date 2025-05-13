"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ItemBidCard = (props) => {
  const router = useRouter();
  // Data for the auction item
  // State for bid inputs
  const data = {
    title: props.title ?? "등록된 제목 없음",
    content: props.content ?? "등록된 내용 없음",
    startPrice: props.startPrice ?? "등록된 시작가 없음",
    instantPrice: props.instantPrice ?? "등록된 즉시가 없음",
    endDate: props.endDate ?? "등록된 종료일 없음",
    isSold: props.isSold ?? "등록된 상태 없음",
  };

  const [bidPrice, setBidPrice] = useState("");
  const [bidComment, setBidComment] = useState("");

  const onClickEdit = async () => {
    router.push(`/board/1/edit`);
  };

  return (
    <Card className="w-[90vw] max-w-[440px] h-[75vh] mt-[6vh] lg:mt-[84px] lg:mr-[39px] border-none shadow-none">
      <CardContent className="p-0 relative">
        <div className="absolute top-0 left-[33px] [font-family:'Noto_Sans_KR-Light',Helvetica] font-light text-black text-base tracking-[0] leading-normal whitespace-nowrap">
          종료일: {data.endDate}
        </div>

        <h1 className="absolute w-[249px] top-[26px] left-[33px] [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-black text-[32px] whitespace-nowrap tracking-[0] leading-normal">
          {data.title}
        </h1>

        <Separator className="absolute top-24 w-[428px] bg-[#cccccc] left-0" />

        <div className="absolute top-[123px] left-[34px] [font-family:'Noto_Sans_KR-Light',Helvetica] font-light text-black text-2xl tracking-[0] leading-normal">
          즉시 구매가 :&nbsp;&nbsp; {data.instantPrice}
        </div>

        <div className="absolute top-[173px] left-[33px] [font-family:'Noto_Sans_KR-Light',Helvetica] font-light text-black text-2xl tracking-[0] leading-normal">
          시작가 :&nbsp;&nbsp;{data.startPrice}
        </div>

        <div className="absolute top-[222px] left-[33px] [font-family:'Noto_Sans_KR-Light',Helvetica] font-light text-black text-2xl tracking-[0] leading-normal">
          현재 최고 입찰가 :&nbsp;&nbsp;{data.isSold}
        </div>

        <Separator className="absolute top-[277px] w-[428px] bg-[#cccccc] left-0" />

        <div className="absolute top-[295px] left-[33px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-normal">
          입찰
        </div>

        <div className="absolute w-[399px] h-[115px] top-[349px] left-[19px]">
          <div className="absolute w-[395px] h-[50px] top-0 left-0 bg-[#efefef] rounded-[5px] flex items-center">
            <Input
              className="h-[50px] bg-[#efefef] border-none pl-7 text-2xl [font-family:'Noto_Sans_KR-Regular',Helvetica] placeholder:text-[#a7a7a7]"
              placeholder="입찰 가격"
              value={bidPrice}
              onChange={(e) => setBidPrice(e.target.value)}
            />
          </div>

          <div className="absolute w-[395px] h-[50px] top-[65px] left-0 bg-[#efefef] rounded-[5px] flex items-center">
            <Input
              className="h-[50px] bg-[#efefef] border-none pl-7 text-2xl [font-family:'Noto_Sans_KR-Regular',Helvetica] placeholder:text-[#a7a7a7]"
              placeholder="입찰 코멘트"
              value={bidComment}
              onChange={(e) => setBidComment(e.target.value)}
            />
          </div>
        </div>

        <div className="absolute w-[202px] h-[49px] top-[484px] left-[116px]">
          <Button className="w-[200px] h-[49px] bg-[#353333] rounded-[16.47px] text-white text-[23.1px] [font-family:'Noto_Sans_KR-Regular',Helvetica] hover:bg-[#252323]">
            입찰하기
          </Button>
        </div>

        <Separator className="absolute top-[553px] w-[428px] bg-[#cccccc] left-0" />

        <div className="flex items-center gap-1.5 absolute top-[567px] left-[255px]">
          <Edit className="w-6 h-6" />
          <button
            onClick={onClickEdit}
            className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-uusj-theme-schemes-outline text-xl underline whitespace-nowrap tracking-[0] leading-normal"
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
