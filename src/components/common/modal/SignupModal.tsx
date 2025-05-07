"use client";
import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogTitle } from "@/components/ui/dialog";
import { ModalProps } from "@/types/modal";

function SignupModal({ handleChangeModal }: ModalProps) {
  // Form field data
  const formFields = [
    { id: "email", label: "E-mail", type: "email" },
    { id: "name", label: "Name", type: "text" },
    { id: "nickname", label: "Nick Name", type: "text" },
  ];

  // Password fields with half width
  const passwordFields = [
    { id: "password", label: "Password", type: "password" },
    { id: "repeatPassword", label: "Repeat Password", type: "password" },
  ];

  return (
    <div className="flex h-full">
      {/* Left side with logo and welcome message */}
      <div className="relative w-[506px] h-full bg-[#f8f8f8] rounded-l-[15px]">
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
      <div className="relative flex-1 bg-white rounded-r-[15px] p-8">
        <h1 className="font-['Rubik',Helvetica] font-normal text-black text-2xl tracking-[0.15px] mb-[65px]">
          Register with your E-mail
        </h1>

        <div className="flex flex-col space-y-7 w-[340px] mx-auto">
          {/* Main form fields */}
          {formFields.map((field) => (
            <div key={field.id} className="space-y-1">
              <Label
                htmlFor={field.id}
                className="text-color-text-neutral-tertiary text-xs tracking-[0.15px] font-normal"
              >
                {field.label}
              </Label>
              <Input
                id={field.id}
                type={field.type}
                defaultValue="Value"
                className="border-0 border-b border-gray-300 rounded-none px-0 h-6 focus-visible:ring-0 focus-visible:border-black"
              />
            </div>
          ))}

          {/* Password fields in a row */}
          {passwordFields.map((field) => (
            <div key={field.id} className="space-y-1">
              <Label
                htmlFor={field.id}
                className="text-color-text-neutral-tertiary text-xs tracking-[0.15px] font-normal"
              >
                {field.label}
              </Label>
              <Input
                id={field.id}
                type={field.type}
                defaultValue="Value"
                className="border-0 border-b border-gray-300 rounded-none px-0 h-6 focus-visible:ring-0 focus-visible:border-black"
              />
            </div>
          ))}

          {/* Submit button */}
          <Button className="w-full h-[66px] bg-[#222222] hover:bg-[#333333] rounded-[10px] text-white text-2xl font-semibold">
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default memo(SignupModal);
