import React, { JSX } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bid } from "@/types/bid";
import BidListItem from "./BidListItem";
import QnaList from "@/components/common/board/Qna/QnaList";

interface ItemInfoTabsProps {
  postId: number;
  userId: number;
  data: {
    content: string;
    bidHistory: Array<{
      id: number;
      price: string;
      comment: string;
    }>;
  };
  bids: Bid[];
}

const ItemInfoTabs = ({ data, bids, postId, userId }: ItemInfoTabsProps): JSX.Element => {
  console.log("lololololo", data.content);
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
          <div
            className="[&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl"
            dangerouslySetInnerHTML={{ __html: data.content ?? "<p>등록 내용 없음</p>" }}
          />
        </TabsContent>

        <TabsContent value="bidHistory" className="mt-0">
          <div className="w-full">
            {bids ? (
              bids.map((bid, index) => (
                <BidListItem bid={bid} key={index} postId={postId} userId={userId} />
              ))
            ) : (
              <div>입찰 내역이 없습니다.</div>
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
