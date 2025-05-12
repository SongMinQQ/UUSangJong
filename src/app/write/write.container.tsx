"use client";
import { useRef, useState, useEffect } from "react";
import WritePageUI from "./write.presenter";
import { useRouter } from "next/navigation";
import { createPost } from "@/services/createPost";
import { updatePost, fetchPostDetail } from "@/services/postService";
import { useParams } from "next/navigation";

export default function WritePage({ isEdit }: { isEdit: boolean }) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    startPrice: "",
    contents: "",
  });
  const { postId } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (isEdit && typeof postId === "string") {
      fetchPostDetail(postId).then((data) => {
        setForm({
          title: data?.title ?? "",
          price: String(data?.instant_price ?? "0"),
          startPrice: String(data?.start_price ?? "0"),
          contents: data?.content ?? "",
        });
      });
    }
  }, [isEdit, postId]);

  console.log("QQr", fetchPostDetail(1));

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onClickImageUpload = () => {
    fileInputRef.current?.click();
  };

  const onClickDeleteImage = (index: number) => {
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };
  const onClickButton = async () => {
    if (!form.title || !form.price || !form.contents) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    try {
      if (isEdit) {
        await updatePost({
          post_id: Number(postId),
          title: form.title,
          content: form.contents,
          start_price: Number(form.startPrice),
          instant_price: Number(form.price),
          end_date: "2025-12-31 23:59:59",
          is_sold: "on_sale",
        });

        alert("수정이 완료되었습니다.");
        router.push(`/board/${postId}`);
      } else {
        const { post_id } = await createPost({
          title: form.title,
          content: form.contents,
          start_price: Number(form.startPrice),
          instant_price: Number(form.price),
          end_date: "2025-12-31 23:59:59",
          is_sold: "on_sale",
        });
        alert("등록이 완료되었습니다!");
        router.push(`/board/${post_id}`);
      }
    } catch (err) {
      console.error(err);
      alert("오류가 발생했습니다.");
    }
  };

  const onClickBUttonBack = () => {
    router.push("/board");
  };

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
      onChangeForm={onChangeForm}
      onClickDeleteImage={onClickDeleteImage}
      isEdit={isEdit}
      form={form}
    />
  );
}
