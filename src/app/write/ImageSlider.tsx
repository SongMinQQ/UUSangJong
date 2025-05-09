import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pointer, X } from "lucide-react";

export default function ImageSlider({
  images,
  onClickDeleteImage,
  onClickImageUpload,
}: {
  images: string[];
  onClickImageUpload: () => void;
  onClickDeleteImage: (index: number) => void;
}) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      scrollbar={{ hide: false }}
      modules={[Scrollbar]}
      className="mySwiper h-[300px]"
    >
      {images.map((url, index) => (
        <SwiperSlide
          key={index}
          className="w-auto h-[195px] relative flex items-center justify-center px-2"
        >
          <img
            src={url}
            alt={`uploaded-${index}`}
            className="w-auto h-full object-fit rounded mr-auto ml-auto pb-3"
          />
          <button
            className="absolute top-0 right-8 text-white bg-black rounded-full w-5 h-5 p-0
          "
            onClick={() => onClickDeleteImage(index)}
          >
            <X className="w-5 h-5 cursor-pointer" fill="black " />
          </button>
        </SwiperSlide>
      ))}

      {images.length < 5 && (
        <SwiperSlide key="add-button" className=" pb-3">
          <div
            onClick={onClickImageUpload}
            className="w-full h-full border-2 border-dashed  border-gray-400 flex items-center justify-center cursor-pointer text-2xl text-gray-500 hover:border-blue-500 transition"
          >
            +
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
}
