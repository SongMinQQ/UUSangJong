import axios from "@/utils/http-commons";
import { SearchEnabled } from "@/store/store";
import { proxyRequestSelector } from "@/services/apiProxy";
const ROWS_PER_PAGE = 24;

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

export const updatePost = async (params: updatePost): Promise<string> => {
  const { data } = await axios.put("/post", params);
  return data;
};

export const fetchPostDetail = async <T = object>(postId: string | number): Promise<T> => {
  // const { data } = await axios.get(`/post/${postId}`);
  const data: T = await proxyRequestSelector({
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
  dueDateEnabled,
  titleEnabled,
  priceEnabled,
  deliveryEnabled,
  page = 1,
}: Partial<SearchEnabled>): Promise<BoardType[]> => {
  const { data } = await axios.get("/post", {
    params: {
      title: titleEnabled ? title : undefined,
      delivery: deliveryEnabled ? delivery : undefined,
      due_date: dueDateEnabled ? due_date : undefined,
      high_price: priceEnabled ? Number(high_price) : undefined,
      is_sold: is_sold ? "on_sale" : "on_sale,sold_out,closed",
      low_price: priceEnabled ? Number(low_price) : undefined,
      orderBy,
      sortBy,
      interval: ROWS_PER_PAGE,
      start: (page - 1) * ROWS_PER_PAGE,
    },
  });
  return data;
};

export const getPreview = async (): Promise<BoardType[]> => {
  const { data } = await axios.get("/post", {
    params: {
      interval: 3,
      start: 0,
      orderBy: "post_id",
      sortBy: "desc",
    },
  });
  return data;
};

// export const deletePost = async (params: number) => {
//   const {data} = await axios.delete
// }
