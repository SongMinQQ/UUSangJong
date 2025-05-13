import { UserRanking } from "@/types/rank";
import axios from "@/utils/http-commons";

export const fetchRanking = async (target: "buyer" | "seller"): Promise<UserRanking[]> => {
  const response = await axios.get(`/user/rank/${target}`);
  return response.data;
};
