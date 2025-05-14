import axios from "@/utils/http-commons";
import { proxyRequestSelector } from "./apiProxy";
import { SearchParams } from "@/store/store";

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

export const fetchPostDetail = async (postId: string | number): Promise<any> => {
  // const { data } = await axios.get(`/post/${postId}`);
  const data = await proxyRequestSelector({
    queryKey: { queryKey: ["post", postId] },
    method: "GET",
  });
  return data;
};

export const getBoardList = async ({
  title,
  delivery,
  due_date,
  high_price,
  is_sold,
  low_price,
  orderBy,
  sortBy,
}: Partial<SearchParams>): Promise<BoardType[]> => {
  const { data } = await axios.get("/post", {
    params: {
      title,
      delivery,
      due_date,
      high_price: Number(high_price),
      is_sold: is_sold ? "on_sale" : "on_sale,sold_out,closed",
      low_price: Number(low_price),
      orderBy,
      sortBy,
    },
  });
  return data;
};
