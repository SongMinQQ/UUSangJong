import { joinValues } from "@/types/join";
import axios from "@/utils/http-commons";

export const checkEmail = async (params: string | undefined): Promise<boolean> => {
  const { data } = await axios.get(`/user/check-email`, {
    params: {
      "email": params
    }
  });
  return data;
}

export const joinMembership = async (params: joinValues): Promise<string> => {
  const { data } = await axios.post('/user/signup', params);
  return data;
}