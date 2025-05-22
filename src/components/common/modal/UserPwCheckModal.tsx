"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { checkPassword } from "@/services/userInfo";
import { handleApi } from "@/utils/handleApi";
import React, { useState } from "react";
import AlertDialogComponent from "../AlertDialog";
import { AlertTriangle } from "lucide-react";

export default function ModalUserPwCheck({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [password, setPassword] = useState("");

  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const handleSubmit = async () => {
    const { data } = await handleApi(() => checkPassword(password));
    console.debug("비밀번호 체크 요청 결과 : ", data);
    if (data) {
      onSuccess();
      onClose();
    } else {
      setShowErrorDialog(true); // 다이얼로그 열기
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
                    placeholder="비밀번호를 입력하세요."
                  />
                </div>
                <Separator className="h-px w-full" />
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full h-[66px] bg-[#222222] hover:bg-[#666666] cursor-pointer rounded-[10px] text-white text-2xl font-semibold tracking-[0.15px]"
            >
              CONTINUE
            </Button>
          </div>
        </CardContent>
      </Card>
      <AlertDialogComponent
        open={showErrorDialog}
        onOpenChange={setShowErrorDialog}
        title="비밀번호 오류"
        description="비밀번호가 틀렸습니다. 다시 입력해주세요."
        icon={<AlertTriangle className="text-red-500" />}
        confirmLabel="retry"
        onConfirm={() => setShowErrorDialog(false)}
        showCancel={false}
      />
    </div>
  );
}
