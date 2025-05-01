import { Separator } from "@radix-ui/react-separator";
import React, { JSX, memo } from "react";

const Footer = (): JSX.Element => {
  const members = ["Song Min gyu", "Kim Min Seon", "Choi Yun Hyeok", "Lee Hye Eun"];
  const contactNameAndLinks = [
    {
      name: "Github",
      link: "",
    },
    {
      name: "Instagram",
      link: "",
    },
    {
      name: "Linkedin",
      link: "",
    },
  ];
  // Team members
  const teamInfo = `Our team : ${members.join(", ")}`;
  const contactInfo = "Contact : wwww123410@gmail.com";
  const socialLinks = `${contactNameAndLinks.map((item) => item.name).join(", ")}`;

  return (
    <div>
      {/* Footer */}
      <footer className="w-full h-[186px] bg-[#7e7a7a] text-white">
        <Separator className="w-full h-px mt-6 bg-white opacity-50" />

        <div className="container px-10 py-6 flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="space-y-4">
            <p className="font-['Klee_One',Helvetica] text-xl">{teamInfo}</p>
            <p className="font-['Klee_One',Helvetica] text-xl">{contactInfo}</p>
          </div>

          <div>
            <p className="font-['Klee_One',Helvetica] text-xl">
              <span>Connect : </span>
              <span className="font-semibold">
                {socialLinks}
                {/* Github&nbsp;&nbsp;Instagram&nbsp;&nbsp;Linkedin{" "} */}
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default memo(Footer);
