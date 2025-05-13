"use client";
import { useBoardItemList } from "@/store/store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { memo, useCallback, useMemo } from "react";

function NavPanel() {
  const { getNavPanelInfo } = useBoardItemList();
  const { nextID, prevID, currentIndex, totalCount } = getNavPanelInfo();
  const router = useRouter();

  const handlePrevPage = useCallback(() => {
    if (prevID) router.push(`${prevID}`);
  }, [prevID, router]);

  const handleNextPage = useCallback(() => {
    if (nextID) router.push(`${nextID}`);
  }, [nextID, router]);

  const CountNavigation = useMemo(
    () => `${currentIndex + 1} of ${totalCount}`,
    [currentIndex, totalCount]
  );
  const prevDisabled = useMemo(() => prevID === undefined, [prevID]);
  const nextDisabled = useMemo(() => nextID === undefined, [nextID]);

  return (
    <div className="flex items-center gap-[5px]">
      <button onClick={handlePrevPage} disabled={prevDisabled}>
        <ChevronLeft className="w-6 h-6" />
      </button>
      <span className="w-[88px] [font-family:'Julius_Sans_One-Regular',Helvetica] font-normal text-black text-2xl text-center">
        {CountNavigation}
      </span>
      <button onClick={handleNextPage} disabled={nextDisabled}>
        <ChevronRight className="w-6 h-6" onClick={handleNextPage} />
      </button>
    </div>
  );
}

export default memo(NavPanel);
