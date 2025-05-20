import { BidMessage, bidToPost } from "@/types/bid";
import axios from "@/utils/http-commons";

export const getBidList = async (postId: number): Promise<BidMessage[]> => {
  const { data } = await axios.get(`/bid/${postId}`);
  return data;
}

export const registerBid = async (params: bidToPost): Promise<boolean> => {
  const { data } = await axios.post("/bid", params);
  return data;
}
