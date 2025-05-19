import axios from "axios";
import { useLogin, useUser } from "@/store/store";
import { toast } from "sonner";

// const BASE_URL = "http://112.150.251.179:8080/";
// const BASE_URL = "http://localhost:8080/eureka/";
const BASE_URL = "https://minq.online/";

// 접근 허용할 페이지 배열
const allowAnonymousPaths = ["/", "/board", "/login", "/board/**"];
// local vue api axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      const { toggleLogin, isLogin } = useLogin.getState();
      const { deleteUserInfo } = useUser.getState();
      const pathname = window.location.pathname;
      if (isLogin) {
        toggleLogin(false);
        deleteUserInfo();
        toast.error("세션이 만료되었습니다. 다시 로그인해주세요.", {
          position: "top-center",
        });
      } else {
        const isAllowed = allowAnonymousPaths.includes(pathname);
        if (!isAllowed) {
          window.history.back();
          toast.error("권한이 없습니다. 로그인을 해 주세요", {
            position: "top-center",
          });
        }
      }
    }
    return Promise.reject(err);
  }
);

export default api;
