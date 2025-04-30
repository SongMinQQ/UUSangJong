import { Search } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
// Shadcn UI components
import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

// Define image data for grid
const imageData = [
  { id: 1, src: "/component-4-2.png", alt: "Book pages spread" },
  { id: 2, src: "/component-9.png", alt: "Minimalist decor with books" },
  { id: 3, src: "/component-7.png", alt: "Open book with bookmark" },
  { id: 4, src: "/contents.png", alt: "Book pages" },
  { id: 5, src: "/component-5.png", alt: "Stack of books" },
  { id: 6, src: "/component-6.png", alt: "Vase on books" },
  { id: 7, src: "/image.png", alt: "Plant on books" },
  { id: 8, src: "/contents-2.png", alt: "Book and coffee" },
  { id: 9, src: "/component-10.png", alt: "Notebook" },
  { id: 10, src: "/component-11.png", alt: "Magazine" },
  { id: 11, src: "/component-4.png", alt: "Book cover" },
  { id: 12, src: "/component-8.png", alt: "Cereal magazine" },
];

// Navigation items
const navItems = [
  { name: "Home", path: "/" },
  { name: "New", path: "/board" },
  { name: "Ranking", path: "/ranking" },
  { name: "Write", path: "/write" },
];

export default function BoardPage() {
  return (
    <div className="bg-[#fefdf6] min-h-screen">
      {/* Header with shadow */}
      <header className="sticky top-0 w-full bg-[#fefdf6] shadow-md z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-1 flex justify-end">{/* Empty space for layout balance */}</div>

            {/* Brand name */}
            <h1 className="text-5xl font-normal text-center tracking-wide font-['Julius_Sans_One-Regular',Helvetica]">
              UUSJ
            </h1>

            {/* Login and search */}
            <div className="flex-1 flex items-center justify-end gap-4">
              <Button
                variant="ghost"
                className="font-['Julius_Sans_One-Regular',Helvetica] text-2xl font-normal"
              >
                LOGIN
              </Button>
              <Search className="w-10 h-10" />
            </div>
          </div>

          {/* Navigation */}
          <NavigationMenu className="mx-auto mt-6">
            <NavigationMenuList className="flex gap-10">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    className="font-['Julius_Sans_One-Regular',Helvetica] text-2xl font-normal cursor-pointer"
                    href={item.path}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Main content grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {imageData.map((image) => (
            <Card
              key={image.id}
              className="w-full h-[360px] rounded-none border border-solid border-[#cccccc] overflow-hidden"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.src})` }}
                aria-label={image.alt}
              />
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
