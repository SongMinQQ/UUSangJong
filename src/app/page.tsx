import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { FadeInWhenVisible } from "@/components/common/FadeInWhenVisible";

// Gallery images
const galleryImages = [
  {
    src: "https://c.animaapp.com/qLJkd6AM/img/unsplash-2wmk7kh4kqi@2x.png",
    alt: "Gallery image 1",
  },
  {
    src: "https://c.animaapp.com/qLJkd6AM/img/unsplash-bhbonc07wsi@2x.png",
    alt: "Gallery image 2",
  },
  {
    src: "https://c.animaapp.com/qLJkd6AM/img/unsplash-zb3ebibrjka.png",
    alt: "Gallery image 3",
  },
];



export default function Info() {
  return (
    <div className="bg-[#fefdf6] flex flex-col items-center w-full">
      <div className="bg-[#fefdf6] w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <section className="w-full h-[391px] relative">
          <div className="w-full h-full relative">
            <Image
              className="w-full h-full object-cover"
              alt="Hero background"
              src="https://c.animaapp.com/qLJkd6AM/img/unsplash-xc1lxlxilus.png"
              fill
            />
            <Separator className="w-full h-px absolute bottom-0" />
          </div>

          <div className="absolute top-0 left-0 w-[447px] h-full bg-[#141414f2] flex flex-col items-center justify-center text-center px-8">
            <h2 className="font-['Noto_Sans_KR',Helvetica] font-bold text-2xl text-[#c5e6ff]">
              UUSJ&nbsp;&nbsp;Auction
            </h2>
            <p className="font-['Noto_Sans_KR',Helvetica] text-[11px] text-[#8e8d8d] mt-2">
              5/30 OPEN!
            </p>
            <p className="font-['Noto_Sans_KR',Helvetica] text-[15px] text-[#c5c1c1] mt-8">
              단순한 거래가 아닌
              <br />
              서로의 삶을 나누고 이어가는 과정
            </p>
            <p className="font-['Noto_Sans_KR',Helvetica] text-[15px] text-[#c6c1c1] mt-4">
              <span className="font-bold">유유상종</span>
              <span>
                을 통해
                <br />
                진정한 가치를 나누려 합니다.
              </span>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="w-full max-w-[1275px] mx-auto px-4 py-16">
          {/* About Section */}
          <FadeInWhenVisible>
            <section className="flex flex-col md:flex-row gap-16 mb-32">
              <div className="w-full md:w-[718px] h-[467px] bg-[url(https://c.animaapp.com/qLJkd6AM/img/frame-37.png)] bg-cover bg-center" />
              <div className="flex flex-col gap-6 md:mt-[350px]">
                <h3 className="font-['Julius_Sans_One',Helvetica] text-2xl text-black">ABOUT US</h3>
                <p className="font-['Julius_Sans_One',Helvetica] text-4xl text-[#4d4b4b]">
                  &quot;삶의 한조각&quot;
                </p>
              </div>
            </section>
          </FadeInWhenVisible>

          {/* Gallery Section */}
          <FadeInWhenVisible direction="right">
            <section className="mb-32">
              <img
                className="w-full max-w-[718px] h-[467px] object-cover ml-auto"
                alt="Gallery feature"
                src="https://c.animaapp.com/qLJkd6AM/img/unsplash-2mkyevga4je.png"
              />
            </section>
          </FadeInWhenVisible>

          {/* Show More Section */}
          <section>
            <div className="mb-6">
              <Link href={"/board"}>
                <h3 className="font-['Inter',Helvetica] text-2xl mb-4 ml-6">SHOW MORE</h3>
                <div className="relative h-[21px] w-[312px]">
                  <img
                    className="w-4 h-[21px] absolute right-0"
                    alt="Arrow"
                    src="https://c.animaapp.com/qLJkd6AM/img/line-16.svg"
                  />
                  <img
                    className="w-full h-px absolute bottom-0"
                    alt="Line"
                    src="https://c.animaapp.com/qLJkd6AM/img/line-17.svg"
                  />
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <Card key={index} className="border-none shadow-none">
                  <CardContent className="p-0">
                    <img
                      className="w-full h-[330px] object-cover"
                      alt={image.alt}
                      src={image.src}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>

      </div>
    </div>
  );
}
