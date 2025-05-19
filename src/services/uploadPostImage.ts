import axios from "@/utils/http-commons";
import { BoardType } from "./postService";

export interface UploadPostImageInput {
  postId: number;
  image: File;
}

export interface UploadPostImageResponse {
  message: string;
}

export const getBoardList = async (): Promise<BoardType[]> => {
  const { data } = await axios.get("/post");
  return data;
};

export const uploadPostImage = async (
  params: UploadPostImageInput
): Promise<UploadPostImageResponse> => {
  const { postId, image } = params;

  const formData = new FormData();
  formData.append("file", image); // 'image'라는 키로 파일 추가
  console.log("formData", image.size);

  const response = await axios.post<UploadPostImageResponse>(
    `/post/${postId}`, // URL: /post/{postId}/image
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data", // FormData 전송시 필요
      },
      maxContentLength: 10 * 1024 * 1024, // 10MB
      maxBodyLength: 20 * 1024 * 1024, // 20MB
    }
  );

  return response.data;
};
