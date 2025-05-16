"use client";
import { memo, useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogTitle } from "@/components/ui/dialog";
import { ModalProps } from "@/types/modal";
import { handleApi } from "@/utils/handleApi";
import { login } from "@/services/login";
import Image from "next/image";
import { useLogin } from "@/store/store";
import { toast } from "sonner";
import AlertDialogComponent from "@/components/common/AlertDialog"; // 실제 경로에 맞춰 수정
import { AlertTriangle } from "lucide-react"; // 아이콘 선택적

function LoginModal({ handleChangeModal }: ModalProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { toggleLogin } = useLogin();

  const [showLoginFailDialog, setShowLoginFailDialog] = useState(false);

  const tryLogin = useCallback(async () => {
    const loginInfo = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    const { data } = await handleApi(() => login(loginInfo));
    if (data?.message === "SUCCESS") {
      toggleLogin(true);
      toast.success("로그인 성공");
    } else {
      setShowLoginFailDialog(true); //진짜 로그아웃 할건지 다이얼로그 오픈
    }
  }, []);

  return (
    <div className="flex h-full">
      {/* Left side - Welcome section */}
      <div className="relative w-[506px] h-full bg-[#f8f8f8] rounded-l-[15px]">
        <DialogTitle className="absolute h-[29px] top-5 left-5 font-medium text-black text-2xl tracking-[0]">
          Welcome!
        </DialogTitle>

        <Image
          className="absolute w-[400px] h-[373px] top-[140px] left-[50px] object-cover"
          alt="Logo black circle"
          width={400}
          height={373}
          src="https://c.animaapp.com/l8ReXnI0/img/logo-black-circle-1@2x.png"
        />

        <div className="absolute flex items-center gap-2 bottom-[30px] left-[30px]">
          <span className="font-['Roboto',Helvetica] font-normal text-[#bbbbbb] text-xs tracking-[0.15px]">
            Are you visit first time?
          </span>
          <button className="text-black underline" onClick={handleChangeModal}>
            Sign up now!
          </button>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="relative flex-1 bg-white rounded-r-[15px] p-8">
        <h1 className="font-['Rubik',Helvetica] font-normal text-black text-2xl tracking-[0.15px] mb-[130px]">
          Log In
        </h1>

        <div className="flex flex-col space-y-8 w-[340px] mx-auto">
          <div className="space-y-1.5">
            <Label
              htmlFor="id"
              className="text-color-text-neutral-tertiary text-xs tracking-[0.15px] font-normal"
            >
              ID
            </Label>
            <Input
              id="id"
              className="border-0 border-b border-gray-300 rounded-none px-0 h-6 focus-visible:ring-0 focus-visible:border-black"
              placeholder="email"
              ref={emailRef}
            />
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="password"
              className="text-palette-text-secondary text-xs tracking-[0.15px] font-normal"
            >
              PASSWORD
            </Label>
            <Input
              id="password"
              type="password"
              className="border-0 border-b border-gray-300 rounded-none px-0 h-6 focus-visible:ring-0 focus-visible:border-black"
              placeholder="password"
              ref={passwordRef}
            />
          </div>

          <Button
            className="w-full h-[66px] mt-6 bg-[#222222] hover:bg-black rounded-[10px] text-white text-2xl font-semibold"
            onClick={tryLogin}
          >
            CONTINUE
          </Button>
        </div>
      </div>
      <AlertDialogComponent
        open={showLoginFailDialog}
        onOpenChange={setShowLoginFailDialog}
        title="로그인 실패"
        description="이메일 또는 비밀번호가 잘못되었습니다."
        showCancel={false} // ← 확인 버튼만!
        icon={<AlertTriangle className="h-5 w-5 text-red-500" />}
        onConfirm={() => setShowLoginFailDialog(false)}
      />
    </div>
  );
}

export default memo(LoginModal);
