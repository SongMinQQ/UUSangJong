"use client";

import { Button } from "@/components/ui/button";
import axios from "@/utils/http-commons";
import AlertDialogComponent from "@/components/common/AlertDialog";
import { useState } from "react";

interface InstantOrderProps {
  postId: number;
}

export default function InstantOrder({ postId }: InstantOrderProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleInstatnOrder = async () => {
    try {
      console.log("즉시 구매 요청 데이터:", {
        post_id: postId,
      });

      const res = await axios.patch(
        "/post",
        {
          post_id: postId,
          uid: null,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //   <AlertDialogComponent/>("즉시 구매 성공");
    } catch (error) {
      console.error("즉시 구매 실패:", error);
      alert("즉시 구매에 실패했습니다. 다시 시도해주세요.");
    }
  };
  ("");

  return (
    <div>
      <Button
        onClick={() => {
          setIsDialogOpen(true);
        }}
        className="w-full h-[60px] rounded-[16.47px] font-bold text-white text-[20px] flex items-center justify-center
                  bg-[#f6a096] hover:bg-[#EF6253] cursor-pointer"
        type="submit"
      >
        즉시 구매
      </Button>

      <AlertDialogComponent
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title={"삶의 한조각을 바로 구매하시겠습니까?"}
        description="즉시 구매를 진행하면 이 경매는 종료됩니다. 정말 진행하시겠습니까?"
        confirmLabel="즉시 구매"
        cancelLabel="취소"
        onConfirm={() => {
          handleInstatnOrder();
          setIsDialogOpen(false);
        }}
        showCancel={true}
      />
    </div>
  );
}
