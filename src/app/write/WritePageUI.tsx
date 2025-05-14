"use client";

import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/scrollbar";
import ImageSlider from "./ImageSlider";
import TextEditor from "@/components/common/Texteditor";
import { Slider } from "@/components/ui/slider";
import { useCallback, useState } from "react";
import { addDays, format } from "date-fns";

export default function WritePageUI(props) {
  const [dueDate, setDueDate] = useState(1);
  const handleDueDateChange = useCallback((value: number[]) => {
    setDueDate(value[0]);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[#fefdf6]">
      {/* 제목 */}
      <div className="mt-[168px] mb-[69px] w-[1111px]">
        <h1 className="text-[40px] font-normal text-left text-[#5B5A5A] mb-[69px]">
          {`\"삶의 한조각을 공유해주세요.\"`}
        </h1>
      </div>

      {/* 상단: 이미지 + 입력창 */}
      <div className="flex w-[1111px] gap-6 mb-6">
        {/* 이미지 영역 */}
        <div className="w-1/2 flex flex-col items-center">
          <div className="w-full mb-2 h-full">
            <ImageSlider
              images={props.imageUrls}
              onClickImageUpload={props.onClickImageUpload}
              onClickDeleteImage={props.onClickDeleteImage}
            />
          </div>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={props.onChangeFile}
            ref={props.fileInputRef}
            className="hidden"
          />
        </div>

        {/* 작성 영역 */}
        <div className="w-1/2 flex flex-col">
          {/* Title */}
          <div className="mb-4">
            <label className="text-sm text-gray-700 block mb-1">Title</label>
            <input
              name="title"
              placeholder="Value"
              className="border-b p-2 w-full text-sm mb-7"
              value={props.form.title}
              onChange={props.onChangeForm}
            />
          </div>

          {/* 즉시 구매가 & 시작 가격 */}
          <div className="flex flex-col gap-8 mb-4">
            <div className="w-full flex flex-row items-center gap-8 pl-10">
              <label
                htmlFor="startPrice"
                className="text-sm text-gray-700 whitespace-nowrap w-[100px]"
              >
                시작 가격
              </label>
              <input
                name="startPrice"
                id="startPrice"
                value={props.form.startPrice}
                placeholder="Value"
                min={0}
                step={100}
                className="border-b p-2 text-sm w-1/2"
                onChange={props.onChangeForm}
              />
            </div>
            <div className="w-full flex flex-row items-center gap-8 pl-10">
              <label htmlFor="price" className="text-sm text-gray-700 whitespace-nowrap w-[100px]">
                즉시 구매가
              </label>
              <input
                id="price"
                name="price"
                type="number"
                value={props.form.price}
                placeholder="Value"
                min={Number(props.form.startPrice)}
                step={100}
                className="border-b p-2 text-sm w-1/2"
                onChange={props.onChangeForm}
              />
            </div>

            {/* 경매 마감일 (슬라이더) */}
            <div className="w-full flex flex-row items-center gap-8 pl-10">
              <label
                htmlFor="endDate"
                className="text-sm text-gray-700 whitespace-nowrap w-[100px]"
              >
                경매 마감일
              </label>
              <div className="relative w-1/2 mt-[5px]">
                <Slider
                  value={[dueDate]}
                  min={1}
                  max={7}
                  step={2}
                  onValueChange={(value) => {
                    setDueDate(value[0]);
                    const nextDate = format(addDays(new Date(), value[0]), "yyyy-MM-dd");
                    setDueDate(value[0]);
                    props.onChangeForm({
                      target: { name: "endDate", value: nextDate },
                    });
                  }}
                  className="
    w-full mt-2

    /* 전체 트랙 (슬라이더 바의 전체 영역) */
    [&_[data-slot=slider-track]]:h-[4px] 
    [&_[data-slot=slider-track]]:bg-gray-300 

    /* 선택된 범위 (왼쪽부터 thumb까지의 범위) */
    [&_[data-slot=slider-range]]:h-[4px] 
    [&_[data-slot=slider-range]]:bg-[#4C4528] 

    /* 슬라이더 thumb (핸들) */
    [&_[data-slot=slider-thumb]]:w-6 
    [&_[data-slot=slider-thumb]]:h-6 
    [&_[data-slot=slider-thumb]]:bg-white 
    [&_[data-slot=slider-thumb]]:border 
    [&_[data-slot=slider-thumb]]:border-gray-400 
    [&_[data-slot=slider-thumb]]:rounded-full

    /* 트랙 라인 커스텀 (선택 영역 뒷부분 선도 동일 굵기로 유지하려면) */
    [&_[data-slot=slider-track]]:rounded-full
  "
                />
                <div className="text-sm text-gray-500 mt-2">
                  {props.form.endDate ? props.form.endDate.replace("T", " ") : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 제품 상세 설명 */}
      <div className="w-[1111px]">
        <TextEditor />
        <label className="text-[16px] text-gray-700 block mt-[100px] mb-1">제품 상세 설명</label>
        <textarea
          name="contents"
          placeholder="제품 상세 설명을 입력하세요"
          className="border p-2 text-base w-full h-[609px] resize-none mb-[113px]"
          value={props.form.contents}
          onChange={props.onChangeForm}
        ></textarea>
      </div>

      {/* 버튼 영역 */}
      <div className="flex gap-4 mt-8">
        <Button
          className="cursor-pointer bg-[#BEB8B8] text-white text-[23.06px] font-light w-[200.15px] h-[49.42px] rounded-[12px]"
          onClick={props.onClickButtonBack}
        >
          돌아가기
        </Button>
        <Button
          className="cursor-pointer bg-[#4C4528] text-white text-[23.06px] font-light w-[200.15px] h-[49.42px] rounded-[12px]"
          onClick={props.onClickButton}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </Button>
      </div>
    </div>
  );
}
