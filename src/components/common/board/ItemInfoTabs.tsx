import React, { JSX } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BidMessage } from "@/types/bid";
import BidListItem from "./BidListItem";
import QnaList from "@/components/common/board/Qna/QnaList";
import { Separator } from "@/components/ui/separator";

interface ItemInfoTabsProps {
  postId: number;
  userId: number;
  data: {
    content: string;
  };
  bids: BidMessage[];
}

const ItemInfoTabs = ({ data, bids, postId, userId }: ItemInfoTabsProps): JSX.Element => {
  console.debug("lololololo", data.content, bids);
  return (
    <div className="mt-[3vh] xl:mt-[15vh] w-[90vw] max-w-[600px] mx-auto xl:mx-0">
      <Tabs defaultValue="bidHistory" className="mb-4">
        <TabsList className="bg-transparent p-0 h-auto flex gap-x-8">
          {["productDescription", "bidHistory", "qna"].map((key, idx) => (
            <TabsTrigger
              key={key}
              value={key}
              className="cursor-pointer hover:text-gray-600 [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-[#b6b6b6] text-[5vw] sm:text-[24px] lg:text-[28px] data-[state=active]:text-black data-[state=active]:rounded-none data-[state=active]:shadow-none px-0 pb-2"
            >
              {["제품 설명", "입찰 내역", "QnA"][idx]}
            </TabsTrigger>
          ))}
        </TabsList>
        <Separator className="bg-gray-300" />
        <TabsContent value="productDescription" className="mt-0">
          <div
            className="p-3 bg-[#faf8ef] rounded-lg shadow-sm min-h-[200px] mt-2 mb-8 [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl"
            dangerouslySetInnerHTML={{ __html: data.content ?? "<p>등록 내용 없음</p>" }}
          />
        </TabsContent>

        <TabsContent value="bidHistory" className="mt-0">
          <div className="w-full">
            {bids.length ? (
              bids.map((bid, index) => (
                <BidListItem bid={bid} key={index} postId={postId} userId={userId} />
              ))
            ) : (
              <div className="min-h-50 text-center content-center">입찰 내역이 없습니다.</div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="qna" className="mt-0">
          {/* QnA 내용 */}
          <QnaList postId={postId} postOwnerId={userId} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ItemInfoTabs;
