"use client";
import { memo, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BoardType } from "@/services/postService";
import { Skeleton } from "../ui/skeleton";

interface ContentItemProp {
  itemData: BoardType;
  isPreview?: boolean;
}

function ContentItem({ itemData, isPreview = false }: ContentItemProp) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseHover = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return (
    <Link href={`/board/${itemData.post_id}${isPreview ? "?isPreview=true" : ""}`}>
      <motion.div
        key={itemData.post_id}
        className="aspect-square relative cursor-pointer  overflow-hidden"
        onHoverStart={handleMouseHover}
        onHoverEnd={handleMouseLeave}
      >
        {itemData.sample_image !== null ? (
          <motion.img
            animate={{
              filter: isHover ? "blur(2px) brightness(50%)" : "none",
              transition: { duration: 0.3 },
            }}
            src={`${itemData.sample_image}`}
            alt={itemData.content}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className=" w-full h-full object-cover flex flex-col justify-center items-center">
            <Skeleton className="h-[250px] w-[250px] rounded-xl bg-[#ddd] mb-2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] bg-[#ddd]" />
              <Skeleton className="h-4 w-[200px] bg-[#ddd]" />
            </div>
          </div>
        )}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHover ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-3 left-3 text-2xl">{itemData.title}</div>
          <div className="absolute top-1/2 left-3 -translate-y-1/2 text-left max-w-[70%]">
            {itemData.content}
          </div>
          <div className="absolute bottom-3 right-3 text-right">{itemData.now_price}</div>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default memo(ContentItem);
