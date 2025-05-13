import { fetchUserInfo } from "@/services/userInfo";
import { UserInfo } from "@/types/userInfo";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const data = await fetchUserInfo();
        setUserInfo(data);
      } catch (error) {
        console.error("Failed to fetch user info", error);
      } finally {
        setLoading(false);
      }
    };
    loadUserInfo();
  }, []);
  return { userInfo, loading };
};
