"use client";

import { Button } from "@/components/ui/button";

export default function WritePageUI(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* 제목 */}
      <div className="mb-15 w-[1111px]">
        <h1 className="text-[40px] font-normal text-left text-[#5B5A5A]">
          "삶의 한조각을 공유해주세요."
        </h1>
      </div>

      {/* 상단: 이미지 + 입력창 (기준 w-1111px) */}
      <div className="flex w-[1111px] gap-6 mb-6">
        {/* 이미지 영역 */}
        <div className="w-1/2 flex flex-col items-center">
          <div className="flex flex-col gap-2 mb-2">
            {props.imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`uploaded-${index}`}
                className="w-24 h-24 object-cover rounded"
              />
            ))}

            {props.imageUrls.length < 5 && (
              <div
                onClick={props.onClickImageUpload}
                className="w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer text-2xl text-gray-500 hover:border-blue-500 transition"
              >
                +
              </div>
            )}

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={props.onChangeFile}
              ref={props.fileInputRef}
              className="hidden"
            />
          </div>
          <div className="text-sm text-gray-700 mt-1">대표사진</div>
        </div>

        {/* 작성 영역 */}
        <div className="w-1/2 flex flex-col">
          {/* Title */}
          <div className="mb-4">
            <label className="text-sm text-gray-700 block mb-1">Title</label>
            <input type="text" placeholder="Value" className="border-b p-2 w-full text-sm" />
          </div>

          {/* 즉시 구매가 & 시작 가격 */}
          <div className="flex flex-col gap-4 mb-4">
            <div className="w-1/2">
              <div className="flex flex-row">
                <label className="text-sm text-gray-700 block mb-1">즉시 구매가</label>
                <input type="number" placeholder="Value" className="border-b p-2 w-full text-sm" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-row">
                <label className="text-sm text-gray-700 block mb-1">시작 가격</label>
                <input type="number" placeholder="Value" className="border-b p-2 w-full text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 제품 상세 설명 */}
      <div className="w-[1111px]">
        <label className="text-sm text-gray-700 block mb-1">제품 상세 설명</label>
        <textarea
          placeholder="제품 상세 설명을 입력하세요"
          className="border p-2 text-sm w-full h-[609px] resize-none"
        ></textarea>
      </div>

      {/* 버튼 영역 */}
      <div className="flex gap-4 mt-8">
        <Button className="bg-[#BEB8B8] text-white text-[23.06px] font-light w-[200.15px] h-[49.42px] rounded-[12px]">
          돌아가기
        </Button>
        <Button className="bg-[#BEB8B8] text-white text-[23.06px] font-light w-[200.15px] h-[49.42px] rounded-[12px]">
          등록하기
        </Button>
      </div>
    </div>
  );
}
