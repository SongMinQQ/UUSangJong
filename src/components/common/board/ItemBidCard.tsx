"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { useBoardItemList } from "@/store/store";
import React, { memo, useEffect } from "react";
import { DialogReport } from "@/components/ui/dialogReport";
import BidToPost from "./BidToPost";
import { addHours, format } from "date-fns";
import { useUser } from "@/hooks/useUser";
import { Button } from "@/components/ui/button";

interface ItemBidCardProps {
  postId: number;
  title: string;
  content: string;
  startPrice: number;
  instantPrice: number;
  nowPrice?: number;
  endDate: string;
  isSold: string;
  writerId: number;
  userId: number;
}

const ItemBidCard = ({
  postId,
  title,
  startPrice,
  instantPrice,
  endDate,
  isSold,
  userId: postOwnerId,
  nowPrice,
}: ItemBidCardProps) => {
  const router = useRouter();
  const { setCurrentId } = useBoardItemList();

  useEffect(() => {
    setCurrentId(postId);
  }, [postId, setCurrentId]);

  const onClickEdit = () => {
    router.push(`/board/${postId}/edit?isEdit=true`);
  };

  const { userInfo } = useUser();
  const userId = userInfo?.user_id;
  const isOwner = userId === postOwnerId;
  const isBidDisabled = isSold !== "on_sale";

  return (
    <Card className="w-[90vw] max-w-[440px] h-auto mt-[6vh] lg:mt-[84px] lg:mr-[39px] border-none shadow-none">
      <CardContent className="p-6 flex flex-col gap-4 text-black">
        {/* 종료일 */}
        <div className="text-base font-light">
          종료일: {format(addHours(endDate, 12), "yyyy.MM.dd HH:mm")}
        </div>
        {/* 제목 */}
        <h1 className="text-[32px] font-bold">{title}</h1>
        <Separator className="bg-[#cccccc]" />
        {/* 가격 정보들 */}
        <div className="space-y-2 text-2xl font-light">
          <div> 즉시구매가: {instantPrice}</div>
          <div>시작가 : {startPrice} 원</div>
          <div>현재 가격 : {nowPrice ?? startPrice} 원</div>
          <div>
            현재 상태 :{" "}
            {isSold === "on_sale" ? "판매중" : isSold === "sold_out" ? "판매 완료" : "판매 취소"}
          </div>
        </div>
        <Separator className="bg-[#cccccc]" />
        {/* 입찰 */}
        <div className="flex flex-col gap-4">
          <div className="flex text-2xl font-bold">입찰</div>
          <BidToPost postId={postId} isDisabled={isBidDisabled} instantPrice={instantPrice} />
        </div>

        <div className="text-2xl font-bold mt-[30px]">즉시 구매</div>
        <Button
          className="w-full h-[60px] rounded-[16.47px] font-bold text-white flex items-center justify-center
                    bg-[#EF6253] hover:bg-[#111111] cursor-pointer"
          type="submit"
          // disabled={isDisabled || parseInt(priceRef.current?.value || "0") > instantPrice}
        >
          즉시 구매
        </Button>
        {/* 
        입찰 아래 separator (마진 효과)
        <Separator className="mt-6 bg-[#cccccc]" /> */}
        <Separator className="bg-[#cccccc]" />
        {/* 게시물 수정 버튼 */}
        {isSold === "on_sale" && isOwner && (
          <div className="flex justify-end items-center gap-2">
            <Edit className="w-6 h-6" />
            <button
              onClick={onClickEdit}
              className="font-normal text-uusj-theme-schemes-outline text-xl underline cursor-pointer"
            >
              게시물 수정
            </button>
          </div>
        )}
        {/* 신고 버튼 (작성자 제외) */}
        {!isOwner && (
          <div className="flex justify-end">
            <DialogReport postId={postId} reportedUserId={postOwnerId} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default memo(ItemBidCard);
