import { Separator } from '@/components/ui/separator';
import { Bid } from '@/types/bid';
import { AlertCircle } from 'lucide-react';
import React, { memo } from 'react';
interface BidListProps {
  bid: Bid;
  bidLength: number;
  index: number;
}
const BidList = ({ bid, bidLength, index }: BidListProps) => {
  const { bid_price, content, created_at } = bid;
  return (
    <div className="relative">
      <div className="py-[15px]">
        <p className="[font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-black text-[4vw] sm:text-base lg:text-xl">
          입찰가 : {bid_price}
          <br />
          {content}
          <br />
          {new Date(created_at).toLocaleString()}
        </p>
      </div>

      <div className="absolute top-1 right-[2px]">
        <AlertCircle className="w-[25px] h-[25px]" />
      </div>

      {index < bidLength - 1 && <Separator className="w-full h-px bg-[#cccccc]" />}
    </div>
  );
};

export default memo(BidList);