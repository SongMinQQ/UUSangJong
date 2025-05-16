"use client";
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
      <footer className="w-full bg-[#7e7a7a] text-white py-6">
        <div className="w-full border-t border-dashed border-white opacity-50 mb-4" />

        <div className="w-full px-14 py-6 flex flex-col gap-4 md:flex-row md:justify-between footer-flex">
          <div className="space-y-2">
            <p className="font-['Klee_One',Helvetica] text-sm sm:text-base md:text-lg">{teamInfo}</p>
            <p className="font-['Klee_One',Helvetica] text-sm sm:text-base md:text-lg">{contactInfo}</p>
          </div>

          <div>
            <p className="font-['Klee_One',Helvetica] text-sm sm:text-base md:text-lg">
              <span>Connect : </span>
              <span className="font-semibold">
                {socialLinks}
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default memo(Footer);
