"use client";
import { DialogContent, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react"; // 닫기 아이콘
import React from "react";
import { UserRanking } from "@/types/rank";
import { fetchRanking } from "@/services/rank";
import { useQuery } from "@tanstack/react-query";
import { RankingList } from "../RankingList";

interface ModalRankingProps {
  open: boolean;
}

const ModalRanking = ({ open }: ModalRankingProps) => {
  const { data: buyerData, isLoading: isLoadingBuyer } = useQuery<UserRanking[]>({
    queryKey: ["ranking", "buyer"],
    queryFn: () => fetchRanking("buyer"),
    enabled: open,
  });

  const { data: sellerData, isLoading: isLoadingSeller } = useQuery<UserRanking[]>({
    queryKey: ["ranking", "seller"],
    queryFn: () => fetchRanking("seller"),
    enabled: open,
  });

  return (
    <DialogContent className="border-none bg-[#fefdf6] max-w-3xl w-full p-8 rounded-lg shadow-xl overflow-y-auto [&>button.absolute]:hidden">
      {/* DialogContent에는 시각 장애인을 위한 screen reader가 내용을 이해할 수 있도록 DialogTitle과 DialogDescription이 필수. */}
      <DialogTitle>
        <VisuallyHidden>Ranking Modal</VisuallyHidden>
      </DialogTitle>
      <DialogDescription>
        <VisuallyHidden>유저 랭킹을 보여주는 모달입니다.</VisuallyHidden>
      </DialogDescription>

      <div className="absolute top-4 right-4">
        <DialogClose asChild>
          <button className="w-6 h-6 p-1 flex items-center justify-center text-gray-500 hover:text-black  cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </DialogClose>
      </div>

      {/* Trophy Icon */}
      <div className="text-center mb-4">
        <span className="text-4xl inline-block translate-x-[12px]">🏆</span>
      </div>

      {isLoadingBuyer ? (
        <p className="text-center">로딩 중 .. </p>
      ) : (
        <RankingList title="UUSJ Best Buyer Rankings" data={buyerData ?? []} />
      )}
      {isLoadingSeller ? (
        <p className="text-center">로딩 중 .. </p>
      ) : (
        <RankingList title="UUSJ Best Seller Rankings" data={sellerData ?? []} />
      )}
    </DialogContent>
  );
};

export default ModalRanking;
