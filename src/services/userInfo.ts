import { UserInfo } from "@/types/userInfo";
import axios from "../utils/http-commons";

export const fetchUserInfo = async (): Promise<UserInfo> => {
  const { data } = await axios.get("/user/me");
  return data;
};
