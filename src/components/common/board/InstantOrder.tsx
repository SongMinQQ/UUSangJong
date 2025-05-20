"use client";

import { Button } from "@/components/ui/button";
import AlertDialogComponent from "@/components/common/AlertDialog";
import { useEffect, useState } from "react";
import { useProgressing } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import { instantBid } from "@/services/postService";

interface InstantOrderProps {
  postId: number;
  isDisabled: boolean;
}

export default function InstantOrder({ postId, isDisabled }: InstantOrderProps) {
  const { setIsLoading } = useProgressing();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: instantBid,
    onError: (error) => {
      console.error("즉시 구매 실패:", error);
      alert("즉시 구매에 실패했습니다. 다시 시도해주세요.");
    },
  });

  const handleInstatnOrder = async () => {
    mutateAsync({
      post_id: postId,
      uid: null,
    });
  };

  useEffect(() => {
    setIsLoading(isPending);
  }, [isPending, setIsLoading]);

  return (
    <div>
      <Button
        onClick={() => {
          setIsDialogOpen(true);
        }}
        className="w-full h-[60px] rounded-[16.47px] font-bold text-white text-[20px] flex items-center justify-center
                  bg-[#f6a096] hover:bg-[#EF6253] cursor-pointer"
        type="submit"
        disabled={isDisabled}
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
