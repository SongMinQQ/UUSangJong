"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import React, { useState } from "react";

export default function ModalUserPwCheck({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/user/password-check", { password });
      if (response.data === true) {
        onSuccess(); //성공시 콜백 호출.
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("비밀번호 확인 에러:", error);
      alert("에러발생: 서버 요청 실패.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center">
      <Card className="bg-[#fefdf6] w-[550px] border-none shadow-none relative">
        <CardContent className="p-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-7 text-gray-500 hover:text-gray-800 text-xl font-bold"
          >
            X
          </button>
          <div className="flex flex-col items-center max-w-[398px] mx-auto py-10">
            <p className="text-xl text-[#5a5a5a] font-normal mb-[40px] self-start">
              회원정보 수정을 위해 비밀번호를 입력해주세요.
            </p>

            <div className="w-full mb-7">
              <div className="flex flex-col gap-1.5 w-full">
                <Label
                  htmlFor="password"
                  className="text-color-text-neutral-tertiary text-xs tracking-[0.15px] font-uusj-theme-label-small"
                >
                  Password
                </Label>

                <div className="min-h-6 w-full">
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-none border-0 border-b border-gray-300  px-0 h-6 text-uusj-themesysdarksurface-container-highest placeholder:text-uusj-themesysdarksurface-container-highest focus-visible:ring-0 focus-visible:ring-offset-0"
                    defaultValue=""
                    placeholder="비밀번호를 입력하세요."
                  />
                </div>
                <Separator className="h-px w-full" />
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full h-[66px] bg-[#222222] hover:bg-[#333333] rounded-[10px] text-white text-2xl font-semibold tracking-[0.15px]"
            >
              {loading ? "확인 중" : "CONTINUE"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
