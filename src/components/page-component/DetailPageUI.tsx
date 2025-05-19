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

  useEffect(() => {
    console.log("postData:", postData);
  }, [postData]);
  useBidSocket(postId, (newBid) => {
    setBids((prev) => [newBid, ...prev]);
    setNowPrice(newBid.bid_price);
  });

  const safeHtml = useMemo(
    () => ({ content: postData ? DOMPurify.sanitize(postData.content) : "" }),
    [postData]
  );

  if (!postId) return <div>postId가 없습니다. URL을 확인하세요.</div>;
  if (!postData) return <div>로딩 중...</div>;

  // console.log("writerEmail", postData.email);

  return (
    <div className="w-full px-4 bg-[#fefdf6]">
      <div className="flex flex-col justify-center xl:flex-row items-start gap-10 max-w-screen-xl mx-auto">
        <div className="xl:w-auto xl:mx-0 w-full mx-auto max-w-lg">
          <ItemInfo images={postData?.images ?? []} />
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

          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
