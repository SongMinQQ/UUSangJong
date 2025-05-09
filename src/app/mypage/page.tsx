import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { JSX } from "react";

export default function MyPage(): JSX.Element {
  // Form field data
  const formFields = [
    { id: "email", label: "E-mail", value: "Value", type: "text" },
    { id: "name", label: "Name", value: "Value", type: "text" },
    { id: "nickname", label: "Nick Name", value: "Value", type: "text" },
    { id: "password", label: "Password", value: "••••••••", type: "password" },
  ];

  return (
    <div className="bg-[#fefdf6] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#fefdf6] w-full max-w-[1440px] relative flex flex-col">
        {/* Form Section */}
        <main className="flex flex-col items-center justify-center py-16">
          <div className="w-[340px]">
            {formFields.map((field, index) => (
              <div
                key={field.id}
                className={`flex flex-col w-full items-start ${index > 0 ? "mt-[93px]" : ""}`}
                style={{ marginTop: index > 0 ? "2rem" : "0" }}
              >
                <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
                  <label
                    htmlFor={field.id}
                    className={`text-${
                      index === 0 ? "color-text-neutral-tertiary" : "palette-text-secondary"
                    } relative w-fit mt-[-1.00px] font-input-label font-[number:var(--input-label-font-weight)] text-[length:var(--input-label-font-size)] tracking-[var(--input-label-letter-spacing)] leading-[var(--input-label-line-height)] whitespace-nowrap [font-style:var(--input-label-font-style)]`}
                  >
                    {field.label}
                  </label>

                  <Input
                    id={field.id}
                    type={field.type}
                    defaultValue={field.value}
                    className={`border-none shadow-none px-0 text-${
                      index === 0
                        ? "uusj-themesysdarksurface-container-highest"
                        : "palette-text-primary"
                    } relative flex-1 mt-[-1.00px] font-input-value font-[number:var(--input-value-font-weight)] text-[length:var(--input-value-font-size)] tracking-[var(--input-value-letter-spacing)] leading-[var(--input-value-line-height)] [font-style:var(--input-value-font-style)]`}
                  />

                  <Separator className="h-px w-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-8 mt-16">
            <Button className="w-[150px] h-[66px] bg-[#222222] rounded-[10px] text-white text-2xl font-semibold [font-family:'Roboto-SemiBold',Helvetica] tracking-[0.15px]">
              HOME
            </Button>
            <Button className="w-[150px] h-[66px] bg-[#222222] rounded-[10px] text-white text-2xl font-semibold [font-family:'Roboto-SemiBold',Helvetica] tracking-[0.15px]">
              EDIT
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
