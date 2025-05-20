"use client";
import { FadeInWhenVisible } from "../common/FadeInWhenVisible";
import Link from "next/link";
import { memo } from "react";
import ContentItem from "../common/ContentItem";
import BannerCarousel from "../common/BannerCarousel";
import { useQuery } from "@tanstack/react-query";
import { getPreview } from "@/services/postService";

function Home() {
  const { data } = useQuery({
    queryKey: ["board"],
    queryFn: getPreview,
  });
  return (
    <div className="bg-[#fefdf6] flex flex-col items-center w-full">
      <div className="bg-[#fefdf6] w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <BannerCarousel />
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
                <h3 className="font-['Inter',Helvetica] text-2xl ml-2">SHOW MORE</h3>
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
              {data &&
                data.map((image, index) => (
                  <ContentItem itemData={image} key={`preview_${index}`} isPreview={true} />
                ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default memo(Home);
