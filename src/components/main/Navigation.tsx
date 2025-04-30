import React from 'react';
import Link from "next/link";
import { Button } from '../ui/button';

const Navigation = () => {
  // Navigation menu items
  const navItems = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "New",
      route: "/new",
    },
    {
      title: "ranking",
      route: "/ranking",
    },
    {
      title: "write",
      route: "/write",
    },
  ];
  return (
    <div>
      {/* Header */}
      <header className="w-full h-[190px] bg-[#fefdf6] shadow-[0px_2px_2px_#00000040] flex flex-col items-center">
        <div className="container flex justify-between items-center pt-6">
          <div className="flex-1"></div>
          <h1 className="font-['Julius_Sans_One',Helvetica] text-5xl text-black">UUSJ</h1>
          <div className="flex-1 flex justify-end">
            <Link href={"/login"}>
              <Button
                variant="link"
                className="font-['Julius_Sans_One',Helvetica] text-2xl text-black"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="flex gap-[38px]">
            {navItems.map((item, index) => (
              <Link key={index} href={item.route}>
                <Button
                  variant="link"
                  className="font-['Julius_Sans_One',Helvetica] text-2xl text-black"
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;