import axios from "@/utils/http-commons";
import { proxyGetRequest } from "@/services/apiProxy";

export interface updatePost {
  post_id: number;
  title: string;
  content: string;
  start_price: number;
  instant_price: number;
  end_date: string;
  is_sold: string;
}

export interface BoardType extends updatePost {
  sample_image: string;
  now_price: string;
}

export const updatePost = async (params: updatePost): Promise<any> => {
  const { data } = await axios.put("/post", params);
  return data;
};

export const fetchPostDetail = async (
  postId: string | number
): Promise<any> => {
  if (!postId) throw new Error("postId 없음");

  const cPostId = Number(postId);
  const data = await proxyGetRequest(`/post/${cPostId}`);
  return data;
};
