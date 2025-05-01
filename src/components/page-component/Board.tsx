import { memo } from "react";
import ContentItem from "../common/ContentItem";

// Data for content grid items
const contentItems = [
  {
    id: 1,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-01@2x.png",
    alt: "Content item 1",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
  {
    id: 2,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-02@2x.png",
    alt: "Content item 2",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
  {
    id: 3,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-03@2x.png",
    alt: "Content item 3",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
  {
    id: 4,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-04@2x.png",
    alt: "Content item 4",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
  {
    id: 5,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-05@2x.png",
    alt: "Content item 5",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
  {
    id: 6,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-06@2x.png",
    alt: "Content item 6",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
  {
    id: 7,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-07@2x.png",
    alt: "Content item 7",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
  {
    id: 8,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-08@2x.png",
    alt: "Content item 8",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
  {
    id: 9,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-09@2x.png",
    alt: "Content item 9",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
  {
    id: 10,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-10@2x.png",
    alt: "Content item 10",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
  {
    id: 11,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-11@2x.png",
    alt: "Content item 11",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
  {
    id: 12,
    imageUrl: "https://c.animaapp.com/D3E5HtV4/img/contents-12@2x.png",
    alt: "Content item 12",
    detail: {
      title: "책 사세요.",
      description: "이 책은 ...",
      price: "20000",
    },
  },
];

function Board() {
  return (
    <div className="bg-[#fefdf6] flex flex-col min-h-screen w-full">
      {/* Content grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {contentItems.map((item) => (
            <ContentItem key={`boardItem_${item.id}`} itemData={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default memo(Board);
