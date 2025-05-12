import axios from "@/utils/http-commons";

export interface updatePost {
  post_id: number;
  title: string;
  content: string;
  start_price: number;
  instant_price: number;
  end_date: string;
  is_sold: string;
}

export const updatePost = async (params: updatePost): Promise<any> => {
  const { data } = await axios.put("/post", params);
  return data;
};

export const fetchPostDetail = async (postId: string | number): Promise<any> => {
  const { data } = await axios.get(`/post/${postId}`);
  return data;
};
