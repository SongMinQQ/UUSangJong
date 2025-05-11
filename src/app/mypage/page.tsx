"use client";
import UserPwCheckModal from "@/components/common/modal/UserPwCheckModal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { JSX, useEffect, useState } from "react";

export default function MyPage(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  // 타입선언.
  // const [userInfo, setUserInfo] = useState<{
  //   email: "test1@gmail.com";
  //   nickname: "testName";
  //   real_name: "TEST";
  // } | null>(null);

  //ui를 위해 더미데이터 넣어본 것.
  const [userInfo, setUserInfo] = useState({
    email: "ihyeeun@gmail.com",
    real_name: "이혜은",
    nickname: "칸쵸",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get("/user/me"); // API 경로에 맞게 수정
        const { email, nickname, real_name } = res.data;
        setUserInfo({ email, nickname, real_name });
      } catch (error) {
        console.error("회원정보 불러오기 실패", error);
      }
    };

    fetchUserInfo();
  }, []);

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
                  {userInfo.real_name}
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
                router.push("/update-info");
              }}
            />
          )}
        </main>
      </div>
    </div>
  );
}
