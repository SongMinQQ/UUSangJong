"use client";

import ItemBidCard from "@/components/common/board/ItemBidCard";
import ItemInfo from "@/components/common/board/ItemInfo";
import ItemInfoTabs from "@/components/common/board/ItemInfoTabs";
import { fetchPostDetail } from "@/services/postService";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";

import React, { useEffect, useState } from "react";

export default function DetailPageUI() {
  const { postId } = useParams();
  const [postData, setPostData] = useState<any>(null);

  useEffect(() => {
    if (!postId) {
      console.error("postId가 없습니다. URL을 확인하세요.");
      return;
    }

    fetchPostDetail(Number(postId))
      .then((data) => {
        console.log("게시물 데이터:", data);
        setPostData(data);
      })
      .catch((error) => {
        console.error("게시물 불러오기 실패:", error);
      });
  }, [postId]);

  if (!postId) return <div>postId가 없습니다. URL을 확인하세요.</div>;
  if (!postData) return <div>로딩 중...</div>;

  const safeHtml = DOMPurify.sanitize(postData.contents);

  return (
    <div className="relative w-full min-h-screen px-4">
      <div className="pt-[5vh] flex flex-col items-center gap-y-10 xl:flex-row justify-evenly ">
        <ItemInfo />
        {/* 이미지 썸네일부분 */}
        <ItemBidCard
          postId={Number(postId)}
          imageUrls={postData?.image_urls}
          title={postData?.title}
          content={postData?.content}
          startPrice={postData?.start_price}
          instantPrice={postData?.instant_price}
          endDate={postData?.end_date}
          isSold={postData?.is_sold}
        />
        {/* 입찰 내용 */}
      </div>
      <ItemInfoTabs data={{ content: safeHtml, bidHistory: postData.bidHistory }} />
      {/* 입찰 댓글.제품설명.QnA */}
    </div>
  );
}
