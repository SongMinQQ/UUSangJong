"use client";
import { DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react"; // 닫기 아이콘
import React from "react";
import { UserRanking } from "@/types/rank";
import { fetchRanking } from "@/services/rank";
import { useQuery } from "@tanstack/react-query";
import { RankingList } from "../RankingList";

// const dummyBuyerData = [{ nickname: "gd" }, { nickname: "nickName" }, { nickname: "nickName" }];

// const dummySellerData = [
//   { nickname: "nickName" },
//   { nickname: "nickName" },
//   { nickname: "nickName" },
// ];

interface ModalRankingProps {
  open: boolean;
}

const ModalRanking = ({ open }: ModalRankingProps) => {
  // const buyerData = dummyBuyerData;
  // const sellerData = dummySellerData;

  // UI 구조화 위해서 더미데이터 삽입을 위해서 api 연결은 잠시 보류
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

  console.log("BUYER DATA : ", buyerData);
  console.log("SELLER DATA : ", sellerData);

  return (
    <DialogContent className="border-none h-[75vh] bg-[#fefdf6] max-w-3xl w-full p-8 rounded-lg shadow-xl overflow-y-auto [&>button.absolute]:hidden">
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

      <RankingList title="UUSJ Best Buyer Rankings" data={buyerData} />
      <RankingList title="UUSJ Best Seller Rankings" data={sellerData} />
    </DialogContent>
  );
};

export default ModalRanking;
