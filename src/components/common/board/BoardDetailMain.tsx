'use client'
import { useParams } from 'next/navigation';
import React from 'react';
import ItemInfo from './ItemInfo';
import ItemBidCard from './ItemBidCard';
import ItemInfoTabs from './ItemInfoTabs';
import { useBidSocket } from '@/hooks/useBidSocket';

const BoardDetailMain = () => {
  const params = useParams();
  //테스트용
  const postId = Number(params?.postId); // URL에서 postId 추출
  const bids = useBidSocket(postId);
  console.log(bids);
  return (
    <div className="relative w-full min-h-screen px-4">
      <div className="pt-[5vh] flex flex-col items-center gap-y-10 xl:flex-row justify-evenly ">
        <ItemInfo />
        <ItemBidCard postId={Number(postId)} />
      </div>
      <ItemInfoTabs bids={bids} />
    </div>
  );
};

export default BoardDetailMain;