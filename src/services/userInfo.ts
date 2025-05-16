import { UserInfo, UserForm } from "@/types/userInfo";
import api from "@/utils/http-commons";

export const fetchUserInfo = async (): Promise<UserInfo> => {
  const { data } = await api.get("/user/me");
  return data;
};

export const checkPassword = async (password: string): Promise<boolean> => {
  const { data } = await api.post("/user/passwordcheck", { password });
  return data;
};

export const updateUser = async (payload: Partial<UserForm>) => {
  const { data } = await api.patch("/user", payload);
  return data;
};
