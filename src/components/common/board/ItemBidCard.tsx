'use client'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, Edit } from 'lucide-react';
import React, { useState } from 'react';

const ItemBidCard = () => {
  // Data for the auction item
  const auctionData = {
    date: "2025-03-30",
    title: "작은 습관의 힘",
    immediatePrice: 10000,
    startingPrice: 1000,
    currentBid: 4000,
  };

  // State for bid inputs
  const [bidPrice, setBidPrice] = useState("");
  const [bidComment, setBidComment] = useState("");
  return (
    <Card className="w-[90vw] max-w-[440px] h-[75vh] mt-[6vh] lg:mt-[84px] lg:mr-[39px] border-none shadow-none">
      <CardContent className="p-0 relative">
        <div className="absolute top-0 left-[33px] [font-family:'Noto_Sans_KR-Light',Helvetica] font-light text-black text-base tracking-[0] leading-normal whitespace-nowrap">
          {auctionData.date}
        </div>

        <h1 className="absolute w-[249px] top-[26px] left-[33px] [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-black text-[32px] whitespace-nowrap tracking-[0] leading-normal">
          {auctionData.title}
        </h1>

        <Separator className="absolute top-24 w-[428px] bg-[#cccccc] left-0" />

        <div className="absolute top-[123px] left-[34px] [font-family:'Noto_Sans_KR-Light',Helvetica] font-light text-black text-2xl tracking-[0] leading-normal">
          즉시 구매가 :&nbsp;&nbsp; {auctionData.immediatePrice}
        </div>

        <div className="absolute top-[173px] left-[33px] [font-family:'Noto_Sans_KR-Light',Helvetica] font-light text-black text-2xl tracking-[0] leading-normal">
          시작가 :&nbsp;&nbsp;{auctionData.startingPrice}
        </div>

        <div className="absolute top-[222px] left-[33px] [font-family:'Noto_Sans_KR-Light',Helvetica] font-light text-black text-2xl tracking-[0] leading-normal">
          현재 최고 입찰가 :&nbsp;&nbsp;{auctionData.currentBid}
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
          <span className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-uusj-theme-schemes-outline text-xl underline whitespace-nowrap tracking-[0] leading-normal">
            게시물 수정
          </span>
        </div>

        <AlertTriangle className="absolute w-[25px] h-[25px] top-[566px] left-[402px] text-red-500" />
      </CardContent>
    </Card>
  );
};

export default ItemBidCard;