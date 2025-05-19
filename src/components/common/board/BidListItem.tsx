import { Card } from "@/components/ui/card";
import { DialogReport } from "@/components/ui/dialogReport";
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
    <Card className="relative py-2 px-4 border-none shadow-lg mb-4 w-full max-w-full break-words">
      <div className="py-[15px]">
        <div className="flex flex-row justify-between">
          <p className="[font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-black text-[4vw] sm:text-base lg:text-xl leading-snug">
            입찰가 : {bid_price}
          </p>
          <DialogReport postId={postId} reportedUserId={user_id} />
        </div>
        <p className="[font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-black text-[4vw] sm:text-base lg:text-xl leading-snug">
          <br />
          {content}
          <br />
        </p>
        <p className="[font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-gray-300 text-[3vw] sm:text-base lg:text-xl text-right leading-snug">
          {new Date(created_at).toLocaleString()}
        </p>
      </div>
    </Card>
  );
};

export default memo(BidListItem);
