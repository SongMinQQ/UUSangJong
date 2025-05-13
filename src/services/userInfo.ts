import { UserInfo } from "@/types/userInfo";
import api from "@/utils/http-commons";

export const fetchUserInfo = async (): Promise<UserInfo> => {
  const { data } = await api.get("/user/me");
  return data;
};
