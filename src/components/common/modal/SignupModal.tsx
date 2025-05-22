"use client";
import React, { memo, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogTitle } from "@/components/ui/dialog";
import { ModalProps } from "@/types/modal";
import { handleApi } from "@/utils/handleApi";
import { checkEmail, joinMembership } from "@/services/join";
import { joinValues } from "@/types/join";
import { toast } from "sonner";

function SignupModal({ handleChangeModal }: ModalProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);
  const checkRef = useRef<boolean>(false);
  // Form field data
  const formFields = [
    { id: "email", label: "E-mail", type: "email" },
    { id: "name", label: "Name", type: "text" },
    { id: "nickname", label: "Nick Name", type: "text" },
  ] as const;

  // Password fields with half width
  const passwordFields = [
    { id: "password", label: "Password", type: "password" },
    { id: "repeatPassword", label: "Repeat Password", type: "password" },
  ] as const;

  const refMatcher = {
    email: emailRef,
    name: nameRef,
    nickname: nicknameRef,
    password: passwordRef,
    repeatPassword: repeatPasswordRef,
  };
  const emailDuplicateCheck = async () => {
    const data = await handleApi(() => checkEmail(emailRef.current?.value));
    console.debug(data);
    if (typeof data.data === "string") {
      toast.error("error");
      checkRef.current = false;
    } else if (data.data) {
      toast.success("사용 가능한 ID 입니다.");
      checkRef.current = true;
    } else {
      toast.warning("이미 존재하는 ID 입니다.");
      checkRef.current = false;
    }
  };

  const join = useCallback(async () => {
    const joinInfo: joinValues = {
      email: emailRef.current?.value,
      real_name: nameRef.current?.value,
      nickname: nicknameRef.current?.value,
      password: passwordRef.current?.value,
    };
    if (!checkRef.current) {
      toast.warning("ID 중복 확인을 해주세요");
      return;
    }
    const { data, error } = await handleApi(() => joinMembership(joinInfo));
    if (error) {
      toast.error(error); //서버가 준 메시지 그대로 보여줌
      return;
    }
    if (passwordRef.current?.value !== repeatPasswordRef.current?.value) {
      toast.warning("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (data === "회원가입 성공!") {
      toast.success("회원가입 되었습니다. 로그인을 진행해 주세요");
      handleChangeModal();
    } else {
      toast.error("회원가입 도중 알 수 없는 오류가 발생했습니다.");
    }
  }, []);

  return (
    <div className="flex h-full">
      {/* Left side with logo and welcome message */}
      <div className="hidden lg:block relative w-[506px] h-full bg-[#f8f8f8] rounded-l-[15px]">
        <DialogTitle className="absolute h-[29px] top-5 left-5 font-medium text-black text-2xl tracking-[0]">
          Welcome!
        </DialogTitle>

        <img
          className="absolute w-[400px] h-[373px] top-[140px] left-[50px] object-cover"
          alt="Logo black circle"
          src="https://c.animaapp.com/l8ReXnI0/img/logo-black-circle-1@2x.png"
        />

        <div className="absolute flex items-center gap-2 bottom-[30px] left-[30px]">
          <span className="font-['Roboto',Helvetica] font-normal text-[#bbbbbb] text-xs tracking-[0.15px]">
            Are you a member?
          </span>
          <button className="text-black underline" onClick={handleChangeModal}>
            Log in now
          </button>
        </div>
      </div>

      {/* Right side with form */}
      <div className="relative flex-1 bg-white w-fit rounded-r-[15px] md:p-8">
        <h1 className="w-fit font-['Rubik',Helvetica] font-normal text-black text-2xl tracking-[0.15px] mb-5 lg:mb-[65px]">
          Register
        </h1>

        <div className="flex flex-col justify-center space-y-2 lg:space-y-7 w-fit lg:w-[340px] mx-auto">
          {/* Main form fields */}
          {formFields.map((field) => (
            <div key={field.id} className="space-y-1">
              <Label
                htmlFor={field.id}
                className="w-fit lg:w-full text-color-text-neutral-tertiary text-xs tracking-[0.15px] font-normal"
              >
                {field.label}
              </Label>
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.id}
                className="w-fit lg:w-full border-0 border-b border-gray-300 rounded-none px-0 h-6 focus-visible:ring-0 focus-visible:border-black"
                ref={refMatcher[field.id]}
              />
              {field.id === "email" && (
                <Button
                  onClick={emailDuplicateCheck}
                  variant={"outline"}
                  className="cursor-pointer hover:bg-gray-200 border-gray-200"
                >
                  중복 확인
                </Button>
              )}
            </div>
          ))}

          {/* Password fields in a row */}
          {passwordFields.map((field) => (
            <div key={field.id} className="space-y-1">
              <Label
                htmlFor={field.id}
                className="w-fit lg:w-full text-color-text-neutral-tertiary text-xs tracking-[0.15px] font-normal"
              >
                {field.label}
              </Label>
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.id}
                className="w-fit lg:w-full border-0 border-b border-gray-300 rounded-none px-0 h-6 focus-visible:ring-0 focus-visible:border-black"
                ref={refMatcher[field.id]}
              />
            </div>
          ))}

          {/* Submit button */}
          <Button
            className="w-full h-[66px] bg-[#222222] hover:bg-[#333333] rounded-[10px] text-white text-2xl font-semibold cursor-pointer"
            onClick={join}
          >
            Create Account
          </Button>
        </div>
      </div>
      <div className="absolute md:hidden flex items-center gap-2 bottom-[1px] right-[10px]">
        <button className="text-black underline" onClick={handleChangeModal}>
          Log in now
        </button>
      </div>
    </div>
  );
}

export default memo(SignupModal);
