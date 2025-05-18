import axios from "@/utils/http-commons";
import { BoardType } from "./postService";

export interface UploadPostImageInput {
  postId: number;
  image: File;
}

export interface UploadPostImageResponse {
  message: string;
}

export interface PostImage {
  image_id: number;
  post_id: number;
  url: string;
}
export const getBoardList = async (): Promise<BoardType[]> => {
  const { data } = await axios.get<BoardType[]>("/post");
  return data;
};

export const getPostImage = async (post_id: number): Promise<PostImage[]> => {
  const { data } = await axios.get<PostImage[]>(`/post/image/${post_id}`);
  return data;
};

//게시글 이미지 업로드
export const uploadPostImage = async (
  params: UploadPostImageInput
): Promise<UploadPostImageResponse> => {
  const { postId, image } = params;

  const formData = new FormData();
  formData.append("file", image); // 'image'라는 키로 파일 추가

  const response = await axios.post<UploadPostImageResponse>(
    `/post/${postId}`, // URL: /post/{postId}/image
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data", // FormData 전송시 필요
      },
    }
  );

  return response.data;
};
