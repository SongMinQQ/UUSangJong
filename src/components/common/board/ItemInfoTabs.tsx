import React, { JSX } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { AlertCircle } from "lucide-react";
import { BidMessage } from "@/types/bid";

const ItemInfoTabs = ({ bids }: { bids: BidMessage[] }): JSX.Element => {
  return (
    <div className="mt-[8vh] w-[90vw] max-w-[600px] mx-auto xl:ml-[18vw] xl:mx-0">
      <Tabs defaultValue="bidHistory">
        <TabsList className="bg-transparent p-0 h-auto mb-[39px] flex gap-x-8">
          {["productDescription", "bidHistory", "qna"].map((key, idx) => (
            <TabsTrigger
              key={key}
              value={key}
              className="[font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-[#b6b6b6] text-[5vw] sm:text-[24px] lg:text-[28px] data-[state=active]:text-black data-[state=active]:rounded-none data-[state=active]:shadow-none px-0 pb-2"
            >
              {["제품 설명", "입찰 내역", "QnA"][idx]}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="productDescription" className="mt-0">
          {/* 제품 설명 내용 */}
        </TabsContent>

        <TabsContent value="bidHistory" className="mt-0">
          <div className="w-full">
            {bids.map((bid, index) => (
              <div key={index} className="relative">
                <div className="py-[15px]">
                  <p className="[font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-black text-[4vw] sm:text-base lg:text-xl">
                    입찰가 : {bid.bid_price}
                    <br />
                    {bid.content}
                    <br />
                    {new Date(bid.created_at).toLocaleString()}
                  </p>
                </div>

                <div className="absolute top-1 right-[2px]">
                  <AlertCircle className="w-[25px] h-[25px]" />
                </div>

                {index < bids.length - 1 && (
                  <Separator className="w-full h-px bg-[#cccccc]" />
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="qna" className="mt-0">
          {/* QnA 내용 */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ItemInfoTabs;
