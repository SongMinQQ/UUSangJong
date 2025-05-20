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
    <form onSubmit={register} className="w-full max-w-md mx-auto space-y-4">
      <div className="w-full h-[50px] bg-[#efefef] rounded-[5px] flex items-center">
        <Input
          className="h-[50px] bg-[#efefef] border-none pl-4 text-2xl"
          placeholder="입찰 가격"
          ref={priceRef}
          disabled={isDisabled}
        />
      </div>

      <div className="w-full h-[50px] top-[65px] left-0 bg-[#efefef] rounded-[5px] flex items-center">
        <Input
          className="h-[50px] bg-[#efefef] border-none pl-4 text-2xl"
          placeholder="입찰 코멘트"
          ref={commentRef}
          disabled={isDisabled}
        />
      </div>

      <div className="w-full flex justify-center">
        <Button
          className=" w-[200px] md:w-full font-bold h-[60px] bg-[#222222] rounded-[16.47px] text-white text-[23.1px] hover:bg-[#55d57e]  cursor-pointer"
          disabled={isDisabled || parseInt(priceRef.current?.value || "0") > instantPrice}
          type="submit"
        >
          입찰하기
        </Button>
      </div>
    </form>
  );
};

export default BidToPost;
