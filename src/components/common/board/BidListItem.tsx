import { Card, CardHeader } from "@/components/ui/card";
import { DialogReport } from "@/components/ui/dialogReport";
import { Separator } from "@/components/ui/separator";
// import { Separator } from "@/components/ui/separator";
import { BidMessage } from "@/types/bid";
import React, { memo } from "react";
interface BidListProps {
  bid: BidMessage;
  postId: number;
  userId: number;
}
const BidListItem = ({ bid, postId }: BidListProps) => {
  const { bid_price, content, created_at, user_id } = bid;
  console.log("userid", user_id);
  return (
    <Card className="border-none bg-[#faf8ef] rounded-lg m-3 px-1 py-3">
      <CardHeader className="flex flex-col gap-1">
        <div className="w-full flex justify-between items-center">
          {/* 입찰가 */}
          <div className="flex flex-col mb-2">
            <span className="text-sm text-gray-500">입찰가</span>
            <span className="text-xl font-bold text-black">{bid_price.toLocaleString()}원</span>
          </div>
          {/* 신고 버튼 */}
          <DialogReport postId={postId} reportedUserId={user_id} />
        </div>
        <Separator className="bg-gray-200" />

        {/* 입찰 내용 */}
        <div className="text-m rounded-md py-1 font-semibold leading-relaxed whitespace-pre-wrap">
          {content}
        </div>
      </CardHeader>

      {/* Separator가 필요하면 아래 주석 해제 */}
      {/* 작성 시간 */}
      <div className="text-xs text-muted-foreground text-end px-6 text-gray-500">
        {new Date(created_at).toLocaleString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </Card>
  );
};

export default memo(BidListItem);
