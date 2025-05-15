import { BidMessage } from "@/types/bid";
import axios from "@/utils/http-commons";

export const getBidList = async (postId: number): Promise<BidMessage[]> => {
  const { data } = await axios.get(`/bid/${postId}`);
  return data;
}
