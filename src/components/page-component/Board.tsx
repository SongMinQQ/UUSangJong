"use client";
import { memo, useEffect, useMemo } from "react";
import ContentItem from "../common/ContentItem";
import { BoardType, getBoardList } from "@/services/postService";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useBoardItemList, useSearch } from "@/store/store";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const ROWS_PER_PAGE = 24;
function Board() {
  const { setIds } = useBoardItemList();
  const {
    title,
    sortBy,
    orderBy,
    low_price,
    is_sold,
    high_price,
    due_date,
    delivery,
    deliveryEnabled,
    dueDateEnabled,
    priceEnabled,
    titleEnabled,
  } = useSearch();
  const { data, fetchNextPage, hasNextPage, isPending } = useInfiniteQuery<BoardType[], Error>({
    queryFn: ({ pageParam = 1 }) =>
      getBoardList({
        title,
        sortBy,
        orderBy,
        low_price,
        is_sold,
        high_price,
        due_date,
        delivery,
        deliveryEnabled,
        dueDateEnabled,
        priceEnabled,
        titleEnabled,
        page: pageParam as number,
      }),
    queryKey: [
      "post",
      { title, sortBy, orderBy, low_price, is_sold, high_price, due_date, delivery },
    ],
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.length || lastPage.length < ROWS_PER_PAGE) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });

  const target = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
  });

  const idList = useMemo(() => {
    const tmp: number[] = [];
    console.log("DATa", data);
    if (data && Array.isArray(data.pages))
      data.pages.forEach((page) => {
        console.log("PAGE", page);
        page.forEach((item) => {
          tmp.push(item.post_id);
        });
      });
    return tmp;
  }, [data]);

  useEffect(() => {
    setIds(idList);
  }, [idList, setIds]);

  if (isPending) return <div>Loading...</div>;
  return (
    <div className="bg-[#fefdf6] flex flex-col min-h-screen w-full">
      {/* Content grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {data &&
            data.pages.map(
              (page) =>
                page &&
                page.map((item) => (
                  <ContentItem key={`boardItem_${item.post_id}`} itemData={item} />
                ))
            )}
          {hasNextPage && <div ref={target} />}
        </div>
      </main>
    </div>
  );
}

export default memo(Board);
