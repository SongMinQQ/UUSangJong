"use client";
import UserPwCheckModal from "@/components/common/modal/UserPwCheckModal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function MyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { userInfo } = useUser();

  if (!userInfo) {
    return <div className="text-center">User not found</div>;
  }

  return (
    <div className="bg-[#fefdf6] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#fefdf6] w-full max-w-[1440px] relative flex flex-col">
        {/* Form Section */}
        <main className="flex flex-col items-center justify-center py-16">
          {userInfo && (
            <div className="w-[340px]">
              <div className="mb-8">
                <label className="text-sm font-uusj-theme-label-small text-gray-500">E-mail</label>
                <div className="text-lg font-uusj-theme-label-small text-gray-900">
                  {userInfo.email}
                </div>
                <Separator className="h-px bg-gray-300 my-0" />
              </div>

              <div className="mb-8">
                <label className="text-sm font-uusj-theme-label-small text-gray-500">Name</label>
                <div className="text-lg font-uusj-theme-label-small text-gray-900">
                  {userInfo.realname}
                </div>
                <Separator className="h-px bg-gray-300 my-0" />
              </div>

              <div className="mb-8">
                <label className="text-sm font-uusj-theme-label-small text-gray-500">
                  Nickname
                </label>
                <div className="text-lg font-uusj-theme-label-small text-gray-900">
                  {userInfo.nickname}
                </div>
                <Separator className="h-px bg-gray-300 my-0" />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-[20px] mt-16">
            <Button
              onClick={() => router.push("/")}
              className="w-[150px] h-[66px] bg-[#222222] hover:bg-[#666666] cursor-pointer rounded-[10px] text-white text-2xl font-semibold [font-family:'Roboto-SemiBold',Helvetica] tracking-[0.15px]"
            >
              HOME
            </Button>
            <Button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="w-[200px] h-[66px] bg-[#222222] hover:bg-[#666666] cursor-pointer rounded-[10px] text-white text-2xl font-semibold [font-family:'Roboto-SemiBold',Helvetica] tracking-[0.15px]"
            >
              UPDATE INFO
            </Button>
          </div>
          {isModalOpen && (
            <UserPwCheckModal
              onClose={() => setIsModalOpen(false)}
              onSuccess={() => {
                setIsModalOpen(false);
                router.push("/mypage/update-info");
              }}
            />
          )}
        </main>
      </div>
    </div>
  );
}
