"use client";
import Autoplay from "embla-carousel-autoplay";
import { memo, useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Separator } from "../ui/separator";

const bannerContents = [
  {
    id: 1,
    src: "https://c.animaapp.com/qLJkd6AM/img/unsplash-xc1lxlxilus.png",
    alt: "Hero background1",
  },
  {
    id: 2,
    src: "https://c.animaapp.com/qLJkd6AM/img/unsplash-xc1lxlxilus.png",
    alt: "Hero background2",
  },
  {
    id: 3,
    src: "https://c.animaapp.com/qLJkd6AM/img/unsplash-xc1lxlxilus.png",
    alt: "Hero background3",
  },
];

function BannerCarousel() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  // ✅ 브라우저 너비 감지
  useEffect(() => {
    const checkSize = () => {
      setIsLargeScreen(window.innerWidth >= 640); // Tailwind sm breakpoint = 640px
    };

    checkSize(); // 초기 체크
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // ✅ 캐러셀 초기화
  useEffect(() => {
    if (isLargeScreen) plugin.current?.reset();
  }, [isLargeScreen]);
  return (
    <section className="w-full max-w-[1440px] h-full min-h-[300px] relative sm:block">
      {isLargeScreen && (
        <Carousel
          className="w-full h-full min-h-[300px]"
          plugins={[plugin.current]}
        >
          <CarouselContent className="w-full h-full min-h-[300px]">
            {bannerContents.map((item) => (
              <CarouselItem key={`banner_Content_${item.id}`}>
                <img
                  className="object-cover w- full h-full"
                  alt={item.alt}
                  src={item.src}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
      <Separator className="w-full h-px absolute bottom-0" />
      <div className="absolute top-0 left-0 w-full sm:w-[447px] h-full bg-[#141414f2] flex flex-col items-center justify-center text-center px-6 sm:px-8">
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
  );
}

export default memo(BannerCarousel);
