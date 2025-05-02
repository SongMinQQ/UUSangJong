import { Login, LoginResponse } from "@/types/login";
import axios from "@/utils/http-commons";

export const login = async (params: Login): Promise<LoginResponse> => {
  const formParams = new URLSearchParams();
  formParams.append("email", params.email!);
  formParams.append("password", params.password!);

  const { data } = await axios.post("/user/login", formParams, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return data;
};