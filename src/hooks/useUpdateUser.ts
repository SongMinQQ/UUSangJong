import { useState } from "react";
import axios from "@/utils/http-commons";

interface UpdatePayload {
  email?: string;
  password?: string;
  nickname?: string;
  real_name?: string;
}

export const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateUser = async (payload: UpdatePayload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.patch("/user", payload);
      return response.data;
    } catch (err) {
      console.error("회원정보 수정 중 에러 발생:", err);
      setError("회원정보 수정에 실패했습니다.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateUser, loading, error };
};
