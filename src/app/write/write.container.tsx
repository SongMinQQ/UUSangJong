"use client";
import { useRef, useState } from "react";
import WritePageUI from "./write.presenter";
import { useRouter } from "next/navigation";

export default function WritePage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onClickImageUpload = () => {
    fileInputRef.current?.click();
  };

  const onClickDeleteImage = (index: number) => {
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };
  const onClickButton = async () => {
    if (!title || !price || !contents) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    try {
      // const response = await fetch("/api/post", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     title,
      //     price,
      //     startPrice,
      //     contents,
      //     imageUrls,
      //   }),
      // });

      // if (!response.ok) throw new Error("등록 실패");

      alert("등록이 완료되었습니다!");
    } catch (err) {
      console.error(err);
      alert("오류가 발생했습니다.");
    }
  };

  const onClickBUttonBack = () => {
    router.push("/board");
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event?.target.value);
  };
  const onChangeStartPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartPrice(event?.target.value);
  };
  const onChangeContents = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContents(event?.target.value);
  };

  const onChangeFile = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const files = event.target.files;
    if (!files) return;

    // 최대 5장까지만 업로드 가능
    const selectedFiles = Array.from(files).slice(0, 5 - imageUrls.length);

    const newImageUrls: string[] = [];

    for (const file of selectedFiles) {
      try {
        const reader = new FileReader();

        const preview = await new Promise<string>((resolve) => {
          reader.onload = (e: ProgressEvent<FileReader>) => {
            const result = e.target?.result;
            if (typeof result === "string") {
              resolve(result);
            }
          };
          reader.readAsDataURL(file);
        });

        newImageUrls.push(preview);
      } catch (error) {
        console.error("업로드 실패:", error);
      }
    }

    setImageUrls((prev) => [...prev, ...newImageUrls]);
  };

  return (
    <WritePageUI
      imageUrls={imageUrls}
      onClickImageUpload={onClickImageUpload}
      onChangeFile={onChangeFile}
      fileInputRef={fileInputRef}
      onClickButton={onClickButton}
      onClickBUttonBack={onClickBUttonBack}
      onChangeTitle={onChangeTitle}
      onChangePrice={onChangePrice}
      onChangeStartPrice={onChangeStartPrice}
      onChangeContents={onChangeContents}
      title={title}
      price={price}
      startPrice={startPrice}
      contents={contents}
      onClickDeleteImage={onClickDeleteImage}
    />
  );
}
