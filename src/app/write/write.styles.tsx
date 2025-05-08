import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

export default function ImageSlider({
  images,
  onClickImageUpload,
}: {
  images: string[];
  onClickImageUpload: () => void;
}) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      scrollbar={{ hide: true }}
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
            className="w-auto h-full object-fit rounded mr-auto ml-auto"
          />
        </SwiperSlide>
      ))}

      {images.length < 5 && (
        <SwiperSlide key="add-button">
          <div
            onClick={onClickImageUpload}
            className="w-full h-24 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer text-2xl text-gray-500 hover:border-blue-500 transition"
          >
            +
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
}
