'use client'
import { memo, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import SignupModal from "./SignupModal";
import { handleApi } from "@/utils/handleApi";
import { login } from "@/services/login";
import Image from "next/image";

function LoginModal() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const tryLogin = useCallback(async () => {
    const loginInfo = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    }
    console.log(loginInfo)
    const { data } = await handleApi(() => login(loginInfo));
    if (data?.message === "SUCCESS") {
      alert("로그인 성공")
    }
    else {
      alert("로그인 실패 ㅅㄱ")
    }
  }, [])

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <DialogContent
        className="overflow-hidden w-[1012px] h-[654px] border-0 shadow-lg"
        style={{
          maxWidth: "unset",
          maxHeight: "unset",
          width: "1012px",
          height: "654px",
        }}
      >
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
              <Dialog>
                <DialogTrigger asChild>
                  <p>Sign up now!</p>
                </DialogTrigger>
                <SignupModal />
              </Dialog>
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

              <Button className="w-full h-[66px] mt-6 bg-[#222222] hover:bg-black rounded-[10px] text-white text-2xl font-semibold"
                onClick={tryLogin}>
                CONTINUE
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </div>
  );
}

export default memo(LoginModal);
