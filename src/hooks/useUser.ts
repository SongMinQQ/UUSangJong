import { fetchUserInfo } from "@/services/userInfo";
import { UserInfo } from "@/types/userInfo";
import { handleApi } from "@/utils/handleApi";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useUser = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const loadUserInfo = async () => {
      const { data, error } = await handleApi(fetchUserInfo);
      if (error) {
        toast.error(error + "회원정보를 불러오지 못했습니다.");
        return;
      }
      if (data) {
        setUserInfo(data);
      }
    };
    loadUserInfo();
  }, []);
  return { userInfo };
};
