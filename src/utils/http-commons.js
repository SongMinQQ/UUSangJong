import axios from "axios";
import { useLogin, useUser } from "@/store/store";
// const BASE_URL = "http://112.150.251.179:8080/";
// const BASE_URL = "http://localhost:8080/eureka/";
const BASE_URL = "https://minq.online/";

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
      if (isLogin) {
        toggleLogin(false);
        deleteUserInfo();
        alert("세션이 만료되었습니다. 다시 로그인해주세요.");
      }
    }
    return Promise.reject(err);
  }
);

export default api;
