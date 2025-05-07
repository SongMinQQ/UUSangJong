"use client";
import { useRef, useState } from "react";
import WritePageUI from "./write.presenter";

export default function WritePage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onClickImageUpload = () => {
    fileInputRef.current?.click();
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

        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch("YOUR_UPLOAD_API_URL", {
          method: "POST",
          body: formData,
        });

        const data: { imageURL: string } = await response.json();
        const imageUrlFromServer = data.imageURL;

        newImageUrls.push(imageUrlFromServer);
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
    />
  );
}
