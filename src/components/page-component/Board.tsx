"use client";
import { memo, useEffect, useMemo } from "react";
import ContentItem from "../common/ContentItem";
import { getBoardList } from "@/services/postService";
import { useQuery } from "@tanstack/react-query";
import { useBoardItemList, useSearch } from "@/store/store";

function Board() {
  const { setIds } = useBoardItemList();
  const { title, sortBy, orderBy, low_price, is_sold, high_price, due_date, delivery } =
    useSearch();
  const { data } = useQuery({
    queryFn: () =>
      getBoardList({
        title,
        sortBy,
        orderBy,
        low_price,
        is_sold,
        high_price,
        due_date,
        delivery,
      }),
    queryKey: [
      "post",
      { title, sortBy, orderBy, low_price, is_sold, high_price, due_date, delivery },
    ],
  });

  const idList = useMemo(() => {
    const tmp: number[] = [];
    if (data)
      data.forEach((item) => {
        tmp.push(item.post_id);
      });
    return tmp;
  }, [data]);

  useEffect(() => {
    setIds(idList);
  }, [idList, setIds]);

  return (
    <div className="bg-[#fefdf6] flex flex-col min-h-screen w-full">
      {/* Content grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {data &&
            data.map((item) => (
              <ContentItem key={` boardItem_${item.post_id}`} itemData={item} />
            ))}
        </div>
      </main>
    </div>
  );
}

export default memo(Board);
