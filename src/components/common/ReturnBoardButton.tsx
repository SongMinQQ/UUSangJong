"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { memo } from "react";

function ReturnBoardButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isPreview = searchParams.get("isPreview");
  const handleReturn = () => {
    if (isPreview) router.back();
    else router.push("/board");
  };

  return (
    <button className="flex items-center" onClick={handleReturn}>
      <ChevronLeft className="w-5 h-5" />
    </button>
  );
}

export default memo(ReturnBoardButton);
