import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogContent } from "@/components/ui/dialog";

function SignupModal() {
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
    <DialogContent
      className="overflow-hidden w-[1012px] h-[654px]"
      style={{
        maxWidth: "unset",
        maxHeight: "unset",
        width: "1012px",
        height: "654px",
      }}
    >
      <div className="w-full h-[654px]">
        <div className="relative w-full h-full bg-[100%_100%]">
          {/* Left side with logo and welcome message */}
          <div className="absolute w-1/2 h-full top-0 left-0">
            <h2 className="absolute h-[29px] top-5 left-5 font-medium text-black text-2xl">
              Welcome!
            </h2>

            <img
              className="absolute w-[400px] h-[373px] top-[140px] left-[50px] object-cover"
              alt="Logo"
              src="https://c.animaapp.com/rjmDTQMM/img/logo-black-circle-1@2x.png"
            />

            <div className="absolute flex gap-1 bottom-[30px] left-[30px] text-xs">
              <span className="text-[#bbbbbb]">Are you a member?</span>
              <a href="#" className="text-black underline">
                Log in now
              </a>
            </div>
          </div>

          {/* Right side with form */}
          <Card className="absolute w-[506px] h-[654px] top-0 left-[505px] bg-[#f8f8f8] rounded-[0px_15px_15px_0px] border-none shadow-none">
            <CardContent className="p-0">
              <h2 className="h-7 mt-[21px] ml-[35px] font-normal text-[#222222] text-2xl tracking-[0.15px]">
                Register with your E-mail
              </h2>

              <form className="mt-[80px] mx-[83px]">
                {/* Main form fields */}
                {formFields.map((field) => (
                  <div key={field.id} className="mb-[30px]">
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor={field.id}
                        className="text-palette-text-secondary text-xs font-normal"
                      >
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        type={field.type}
                        defaultValue="Value"
                        className="border-none border-b border-b-gray-300 rounded-none px-0 h-6 min-h-6 shadow-none focus-visible:ring-0 focus-visible:border-b-black"
                      />
                      <div className="h-px bg-gray-300 w-full" />
                    </div>
                  </div>
                ))}

                {/* Password fields in a row */}
                <div className="flex gap-[13px] mb-[55px]">
                  {passwordFields.map((field) => (
                    <div key={field.id} className="flex-1">
                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor={field.id}
                          className="text-palette-text-secondary text-xs font-normal"
                        >
                          {field.label}
                        </Label>
                        <Input
                          id={field.id}
                          type={field.type}
                          defaultValue="Value"
                          className="border-none border-b border-b-gray-300 rounded-none px-0 h-6 min-h-6 shadow-none focus-visible:ring-0 focus-visible:border-b-black"
                        />
                        <div className="h-px bg-gray-300 w-full" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full h-[66px] bg-[#222222] hover:bg-[#333333] rounded-[10px] text-white text-2xl font-semibold"
                >
                  Create Account
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </DialogContent>
  );
}

export default memo(SignupModal);
