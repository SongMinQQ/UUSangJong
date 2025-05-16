"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // shadcn 사용 시 존재
import React from "react";

const medals = ["🥇", "🥈", "🥉"];

interface RankingListProps {
  title: string;
  data: { nickname: string }[];
}

export const RankingList = ({ title, data }: RankingListProps) => {
  return (
    <section className="mb-2">
      <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
      <div className="space-y-3">
        {data.slice(0, 3).map((user, idx) => (
          <Card
            key={user.nickname}
            className={cn(
              "rounded-md px-4 py-2 border-none overflow-hidden shadow bg-gradient-to-r",
              idx === 0 && "from-[#FFC229] to-[#FFEBB8]",
              idx === 1 && "from-[#BDBDBD] to-[#F3F3F3]",
              idx === 2 && "from-[#913F0B] to-[#F1E6DA]"
            )}
          >
            <CardContent className="p-0">
              <div className="flex items-center w-full">
                {/* 왼쪽 메달 */}
                <div className="w-12 flex justify-start">
                  <span className="text-2xl">{medals[idx]}</span>
                </div>

                {/* 가운데 닉네임 */}
                <div className="flex-1 text-center">
                  <span className="text-xl">{user.nickname}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
