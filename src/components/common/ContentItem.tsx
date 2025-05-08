"use client";
import { memo, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ItemDescriptionType = {
  title: string;
  description?: string;
  price: string;
};

type ItemDataType = {
  id: number;
  imageUrl: string;
  alt: string;
  detail: ItemDescriptionType;
};

interface ContentItemProp {
  itemData: ItemDataType;
}

function ContentItem({ itemData }: ContentItemProp) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseHover = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return (
    <Link href={`/board/${itemData.id}`}>
      <motion.div
        key={itemData.id}
        className="aspect-square relative cursor-pointer  overflow-hidden"
        onHoverStart={handleMouseHover}
        onHoverEnd={handleMouseLeave}
      >
        <motion.img
          animate={{
            filter: isHover ? "blur(2px) brightness(50%)" : "none",
            transition: { duration: 0.3 },
          }}
          src={itemData.imageUrl}
          alt={itemData.alt}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHover ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-3 left-3 text-2xl">{itemData.detail.title}</div>
          <div className="absolute top-1/2 left-3 -translate-y-1/2 text-left max-w-[70%]">
            {itemData.detail.description}
          </div>
          <div className="absolute bottom-3 right-3 text-right">{itemData.detail.price}</div>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default memo(ContentItem);
