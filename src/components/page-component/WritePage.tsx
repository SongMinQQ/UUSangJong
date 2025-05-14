"use client";
import { useRef, useState, useEffect } from "react";
import WritePageUI from "../../app/write/WritePageUI";
import { useRouter } from "next/navigation";
import { createPost } from "@/services/createPost";
import { updatePost, fetchPostDetail } from "@/services/postService";
import { uploadPostImage } from "@/services/uploadPostImage";
import { useParams } from "next/navigation";
import { addDays, format } from "date-fns";

export default function WritePage({ isEdit }: { isEdit: boolean }) {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    startPrice: "",
    contents: "",
    endDate: format(addDays(new Date(Date.now()), 1), "yyyy-MM-dd"),
  });
  const { postId } = useParams();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit && postId) {
      fetchPostDetail(Number(postId))
        .then((data) => {
          setForm({
            title: data.title ?? "",
            price: String(data.instant_price ?? "0"),
            startPrice: String(data.start_price ?? "0"),
            contents: data.content ?? "",
            endDate: data.end_date.slice(0, 10),
          });
        })
        .catch((error) => {
          console.error("게시물 불러오기 실패:", error);
        });
    }
  }, [isEdit, postId]);

  const onClickImageUpload = () => {
    fileInputRef.current?.click();
  };

  const onClickDeleteImage = (index: number) => {
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const selectedFiles = Array.from(files).slice(0, 5 - imageFiles.length);
    const newPreviewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    setImageFiles((prev) => [...prev, ...selectedFiles]);
  };

  const onClickButton = async () => {
    if (!form.title || !form.price || !form.contents) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    try {
      let createdPostId = Number(postId);

      if (isEdit) {
        await updatePost({
          post_id: createdPostId,
          title: form.title,
          content: form.contents,
          start_price: Number(form.startPrice),
          instant_price: Number(form.price),
          end_date: form.endDate,
          is_sold: "on_sale",
        });
        alert("수정 완료");
      } else {
        const response = await createPost({
          title: form.title,
          content: form.contents,
          start_price: Number(form.startPrice),
          instant_price: Number(form.price),
          end_date: form.endDate,
          is_sold: "on_sale",
        });

        console.log("응답", response);

        if (!response?.postId) {
          console.error("📡 등록 실패 응답:", response);
          alert("게시물 등록 실패");
          return;
        }

        createdPostId = response.postId;
        console.log("✅ 게시물 등록 성공:", createdPostId);

        if (imageFiles.length > 0) {
          for (const file of imageFiles) {
            await uploadPostImage({ postId: createdPostId, image: file });
          }
          console.log("🖼 이미지 업로드 완료");
        }

        alert("등록 완료");
      }

      router.push(`/detailtest/${createdPostId}`);
    } catch (err: any) {
      if (err.response) {
        console.error("📡 서버 응답 오류:", err.response.data);
        alert(`서버 오류: ${err.response.data}`);
      } else if (err.request) {
        console.error("🌐 요청은 갔으나 응답 없음:", err.request);
        alert("요청 오류: 응답이 없습니다");
      } else {
        console.error("❗ 기타 오류:", err.message);
        alert(`기타 오류: ${err.message}`);
      }
    }
  };

  const onClickBUttonBack = () => {
    router.push("/board");
  };

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <WritePageUI
      imageUrls={previewUrls}
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
