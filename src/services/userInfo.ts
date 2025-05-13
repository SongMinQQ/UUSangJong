import { UserInfo } from "@/types/userInfo";
import axios from "../utils/http-commons";

export const fetchUserInfo = async (): Promise<UserInfo> => {
  const { data } = await axios.get("/user/me");
  return data;
};

export const checkPassword = async (password: string): Promise<boolean> => {
  const { data } = await axios.post("/user/passwordcheck", { password });
  return data;
};
