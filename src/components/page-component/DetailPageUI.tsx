"use client";

import ItemBidCard from "@/components/common/board/ItemBidCard";
import ItemInfo from "@/components/common/board/ItemInfo";
import ItemInfoTabs from "@/components/common/board/ItemInfoTabs";
import { fetchPostDetail } from "@/services/postService";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";
import React, { useEffect, useMemo, useState } from "react";
import { BidMessage } from "@/types/bid";
import { useBidSocket } from "@/hooks/useBidSocket";
import { getBidList } from "@/services/bid";
import { useQuery } from "@tanstack/react-query";
import { postItem } from "@/types/post";
import { toast } from "sonner";
import FloatingActionButton from "../common/FloatingActionButton";
import { TicketPlusIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import BidToPost from "../common/board/BidToPost";

export default function DetailPageUI() {
  const params = useParams();
  const postId = Number(params?.postId);
  const [bids, setBids] = useState<BidMessage[]>([]);
  const { data: postData, refetch: refetchPostData } = useQuery<postItem>({
    queryKey: ["post", { postId }],
    queryFn: () => fetchPostDetail<postItem>(postId),
  });
  const { data: bidData, refetch: refetchBidData } = useQuery<BidMessage[]>({
    queryKey: ["bid", { postId }],
    queryFn: () => getBidList(postId),
    enabled: !!postId,
  });
  const [nowPrice, setNowPrice] = useState<number>(
    postData?.now_price || postData?.start_price || 0
  );

  useEffect(() => {
    if (bidData && Array.isArray(bidData)) {
      setBids(bidData);
      if (bidData.at(0)?.bid_price)
        setNowPrice(bidData.at(0)?.bid_price || postData?.start_price || 0);
    }
  }, [bidData, postData?.start_price]);

  useEffect(() => {
    if (!postId) {
      console.error("postId가 없습니다. URL을 확인하세요.");
      return;
    }
    refetchPostData();
    refetchBidData();
  }, [postId, refetchBidData, refetchPostData]);

  useEffect(() => {
    console.log(bids);
  }, [bids]);

  useBidSocket(postId, (newBid) => {
    console.log(newBid);
    if (newBid.message) {
      if (postData) {
        postData.is_sold = "sold_out";
      }
      toast.info("판매 완료되었습니다.");
    } else {
      setBids((prev) => [newBid, ...prev]);
      setNowPrice(newBid.bid_price);
    }
  });

  const safeHtml = useMemo(
    () => ({ content: postData ? DOMPurify.sanitize(postData.content) : "" }),
    [postData]
  );

  if (!postId) return <div>postId가 없습니다. URL을 확인하세요.</div>;
  if (!postData) return <div>로딩 중...</div>;

  // console.log("writerEmail", postData.email);

  return (
    <div className="w-full px-4 bg-[#fefdf6] flex flew-col md:block">
      <div className="flex flex-col items-center xl:flex-row xl:justify-center xl:items-start xl:gap-40 max-w-screen-xl mx-auto">
        <div className=" w-auto max-w-lg">
          <ItemInfo images={postData?.images ?? []} />
          <div className="lg:hidden mt-[60px]">
            <ItemBidCard
              postId={postId}
              title={postData?.title}
              content={postData?.content}
              startPrice={postData?.start_price}
              instantPrice={postData?.instant_price}
              endDate={postData?.end_date}
              isSold={postData?.is_sold}
              writerId={postData.user_id}
              userId={postData?.user_id}
              nowPrice={nowPrice}
            />
          </div>
          <ItemInfoTabs postId={postId} userId={postData.user_id} data={safeHtml} bids={bids} />
        </div>
        {/* 이미지 썸네일부분 */}
        <div className="hidden xl:block w-full max-w-[440px] sticky top-[139px] self-start">
          <ItemBidCard
            postId={postId}
            title={postData?.title}
            content={postData?.content}
            startPrice={postData?.start_price}
            instantPrice={postData?.instant_price}
            endDate={postData?.end_date}
            isSold={postData?.is_sold}
            writerId={postData.user_id}
            userId={postData?.user_id}
            nowPrice={nowPrice}
          />
        </div>
        {/* 입찰 내용 */}
      </div>
      <Drawer modal={false}>
        <DrawerTrigger asChild>
          <FloatingActionButton>
            <TicketPlusIcon className="w-6 h-6" />
          </FloatingActionButton>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-2xl font-bold text-center">
            <DrawerTitle>입찰</DrawerTitle>
          </DrawerHeader>
          <BidToPost
            postId={postId}
            isDisabled={postData?.is_sold !== "on_sale"}
            instantPrice={postData?.instant_price}
          />
          <DrawerClose asChild className="mt-2 mr-2 ml-2 mb-2">
            <Button
              className=" w-full max-w-md mx-auto space-y-4 sm:w-[200px] h-[49px] bg-[#353333] rounded-[16.47px] text-white text-[23.1px] hover:bg-[#252323]"
              disabled={postData?.is_sold !== "on_sale"}
              type="submit"
            >
              닫기
            </Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
