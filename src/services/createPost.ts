import axios from "@/utils/http-commons";

export interface CreatePostInput {
  title: string;
  content: string;
  start_price: number;
  instant_price: number;
  end_date: string;
  is_sold: string;
}

export interface CreatePostResponse {
  post_id: number;
  message?: string;
}

export const createPost = async (params: CreatePostInput): Promise<CreatePostResponse> => {
  const { data } = await axios.post("/post", params);
  return data;
};
