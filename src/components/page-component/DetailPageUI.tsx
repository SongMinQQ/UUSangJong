"use client";

import ItemBidCard from "@/components/common/board/ItemBidCard";
import ItemInfo from "@/components/common/board/ItemInfo";
import ItemInfoTabs from "@/components/common/board/ItemInfoTabs";
import { fetchPostDetail } from "@/services/postService";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";

import React, { useEffect, useState } from "react";
import { handleApi } from "@/utils/handleApi";
import { BidMessage } from "@/types/bid";
import { useBidSocket } from "@/hooks/useBidSocket";
import { getBidList } from "@/services/bid";

export default function DetailPageUI() {
  const params = useParams();
  const postId = Number(params?.postId);
  const [postData, setPostData] = useState<any>(null);
  const [bids, setBids] = useState<BidMessage[]>([]);

  const fetchPostData = async () => {
    const { data } = await handleApi(() => fetchPostDetail(postId));
    if (data) setPostData(data);
  };
  const fetchBids = async () => {
    const { data } = await handleApi(() => getBidList(postId));
    setBids(Array.isArray(data) ? data : []);
  };
  useEffect(() => {
    if (!postId) {
      console.error("postId가 없습니다. URL을 확인하세요.");
      return;
    }
    fetchPostData();
    fetchBids();
  }, [postId]);
  useEffect(() => {
    console.log(bids);
  }, [bids]);
  useBidSocket(postId, (newBid) => {
    setBids((prev) => [newBid, ...prev]);
  });

  if (!postId) return <div>postId가 없습니다. URL을 확인하세요.</div>;
  if (!postData) return <div>로딩 중...</div>;

  const safeHtml = DOMPurify.sanitize(postData.content);

  return (
    <div className="relative w-full min-h-screen px-4">
      <div className="pt-[5vh] flex flex-col items-center gap-y-10 xl:flex-row justify-evenly ">
        <ItemInfo />
        {/* 이미지 썸네일부분 */}
        <ItemBidCard
          postId={postId}
          imageUrls={postData?.image_urls}
          title={postData?.title}
          content={postData?.content}
          startPrice={postData?.start_price}
          instantPrice={postData?.instant_price}
          endDate={postData?.end_date}
          isSold={postData?.is_sold}
          userId={postData?.user_id}
        />
        {/* 입찰 내용 */}
      </div>
      <ItemInfoTabs
        postId={postId}
        userId={postData.user_id}
        data={{ content: safeHtml, bidHistory: postData.bidHistory }}
        bids={bids}
      />
      {/* 입찰 댓글.제품설명.QnA */}
    </div>
  );
}
