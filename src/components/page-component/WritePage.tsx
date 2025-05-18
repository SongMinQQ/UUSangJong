"use client";
import { useRef, useState, useEffect } from "react";
import WritePageUI from "../../app/write/WritePageUI";
import { useRouter } from "next/navigation";
import { createPost } from "@/services/createPost";
import { updatePost, fetchPostDetail } from "@/services/postService";
import { getPostImage, PostImage, uploadPostImage } from "@/services/uploadPostImage";
import { useParams } from "next/navigation";
import { addDays, format } from "date-fns";

export default function WritePage({ isEdit }: { isEdit: boolean }) {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [formError, setFormError] = useState({
    title: "",
    price: "",
    startPrice: "",
    contents: "",
    images: "",
  });
  const [form, setForm] = useState({
    title: "",
    price: "",
    startPrice: "",
    contents: "",
    endDate: format(addDays(new Date(Date.now()), 1), "yyyy-MM-dd"),
  });
  const [images, setImages] = useState<PostImage[]>([]);
  const { postId } = useParams();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  //게시물
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

  //이미지
  useEffect(() => {
    if (postId) {
      getPostImage(Number(postId)).then(setImages);
    }
  }, [postId]);
  const onClickDeleteImage = (index: number) => {
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (isEdit && images.length > 0) {
      const exUrls = images.map((image) => image.url);
      setPreviewUrls(exUrls);
    }
  }, [isEdit, images]);

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const selectedFiles = Array.from(files).slice(0, 5 - imageFiles.length);
    const newPreviewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    setImageFiles((prev) => [...prev, ...selectedFiles]);
    setFormError((prev) => ({ ...prev, images: "" })); // 이미지 에러 즉시 제거
  };

  const onClickButton = async () => {
    const totalImages = images.length + imageFiles.length;
    const errors = {
      title: form.title ? "" : "제목을 입력해주세요.",
      startPrice: form.startPrice ? "" : "시작가를 입력해주세요.",
      price: form.price ? "" : "즉시구매 가격을 입력해주세요.",
      contents: form.contents ? "" : "내용을 입력해주세요.",
      images: totalImages > 0 ? "" : "이미지는 1개 이상 등록해주세요.",
    };

    setFormError(errors);

    const hasError = Object.values(errors).some((msg) => msg !== "");
    if (hasError) return;

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

        if (!response?.postId) {
          alert("게시물 등록 실패");
          return;
        }

        createdPostId = response.postId;

        if (imageFiles.length > 0) {
          for (const file of imageFiles) {
            await uploadPostImage({ postId: createdPostId, image: file });
          }
        }

        alert("등록 완료");
      }

      router.push(`/board/${createdPostId}`);
    } catch (err: any) {
      console.error(err);
      alert(`오류: ${err.message}`);
    }
  };

  const onClickBUttonBack = () => {
    router.push("/board");
  };

  // ✅ 실시간 입력 시 해당 필드 에러 제거
  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFormError((prev) => ({ ...prev, [name]: "" }));
  };

  const onChangeContents = (html: string) => {
    setForm((prev) => ({ ...prev, contents: html }));
    setFormError((prev) => ({ ...prev, contents: "" }));
  };

  const onClickImageUpload = () => {
    fileInputRef.current?.click();
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
      onChangeContents={onChangeContents}
      isEdit={isEdit}
      form={form}
      formError={formError}
      imageFiles={imageFiles}
      setImageFiles={setImageFiles}
    />
  );
}
