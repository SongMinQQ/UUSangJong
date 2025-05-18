import ImageUloadSlider from "@/app/write/ImageUploadSlider";
import { JSX } from "react";

export default function ItemInfo({ images = [] }: { images?: string[] }): JSX.Element {
  return (
    <div className="relative w-full max-w-[40vw]">
      <div className="w-full flex flex-col">
        <div className="flex flex-col-reverse lg:flex-row lg:h-[65vh] gap-6 lg:gap-[3vh]">
          {/* Left thumbnails */}
          <ImageUloadSlider images={images} />
        </div>
      </div>
    </div>
  );
}
