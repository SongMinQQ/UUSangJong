"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerBid } from "@/services/bid";
import { handleApi } from "@/utils/handleApi";
import React, { useRef } from "react";
import { toast } from "sonner";

interface BidToPostProps {
  postId: number;
  isDisabled: boolean;

  instantPrice: number;
}

const BidToPost = ({ postId, isDisabled, instantPrice }: BidToPostProps) => {
  const priceRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLInputElement>(null);

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!priceRef.current?.value || !commentRef.current?.value) {
      toast.error("모든 항목을 입력해 주세요");
      return;
    }
    const sendBid = {
      post_id: postId,
      user_id: null,
      bid_price: Number(priceRef.current?.value),
      content: commentRef.current!.value,
    };
    const { data, error } = await handleApi(() => registerBid(sendBid));
    console.log(data);
    if (data) {
      toast.info("입찰이 등록되었습니다.");
      priceRef.current!.value = "";
      commentRef.current!.value = "";
    } else toast.error(error);
  };

  return (
    <form onSubmit={register} className="flex flex-col gap-4">
      <Input
        className="h-[50px] bg-[#efefef] border-none pl-4 text-2xl"
        placeholder="입찰 가격"
        disabled={isDisabled}
        type="number"
        max={instantPrice}
        ref={priceRef}
      />
      <Input
        className="h-[50px] bg-[#efefef] border-none pl-4 text-2xl"
        placeholder="입찰 코멘트"
        disabled={isDisabled}
        ref={commentRef}
      />
      {/* <Button
        disabled={isDisabled}
        className="w-full h-[49px] bg-[#353333] rounded-[16.47px] text-white text-[23px] hover:bg-[#252323] cursor-pointer"
        type="submit"
      >
        입찰하기
      </Button> */}

      <Button
        className="w-full h-[60px] rounded-[16.47px] font-bold text-white flex items-center justify-center
             bg-[#222222] hover:bg-[#111111]"
        type="submit"
        disabled={isDisabled || parseInt(priceRef.current?.value || "0") > instantPrice}
      >
        입찰하기
      </Button>
    </form>
  );
};

export default BidToPost;
