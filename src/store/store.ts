import { create } from "zustand";
import { persist } from "zustand/middleware";

interface loginStore {
  isLogin: boolean;
  toggleLogin: (params: boolean) => void;
}
export const useLogin = create<loginStore>()(
  persist(
    (set) => ({
      isLogin: false,
      toggleLogin: (params) => set(() => ({ isLogin: params })),
    }),
    { name: "login-storage" }
  )
);

const initialUserInfo = {
  nickname: "",
  realname: "",
  message: "",
  rold: "",
  email: "",
};

type UserInfo = typeof initialUserInfo;

interface userStore extends UserInfo {
  setUserInfo: (info: typeof initialUserInfo) => void;
  deleteUserInfo: () => void;
}
export const useUser = create<userStore>()(
  persist(
    (set) => ({
      ...initialUserInfo,
      setUserInfo: (info) => set(() => ({ ...info })),
      deleteUserInfo: () => set(() => ({ ...initialUserInfo })),
    }),
    { name: "user-storage" }
  )
);

interface SearchParams {
  is_sold: boolean;
  due_date: string;
  title: string;
  low_price: string;
  high_price: string;
  delivery: string;
  orderBy: string;
  sortBy: string;
}

interface SearchProps extends Partial<SearchParams> {
  setIsSold: (value: boolean) => void;
  setDueDate: (value: string) => void;
  setTitle: (value: string) => void;
  setLowPrice: (value: string) => void;
  setHighPrice: (value: string) => void;
  setDelivery: (value: string) => void;
  setOrderBy: (value: string) => void;
  setSortBy: (value: string) => void;
}

export const useSearch = create<SearchProps>()(
  persist(
    (set) => ({
      orderBy: "title",
      sortBy: "desc",
      delivery: "normal",
      low_price: "0",
      high_price: "3000000",
      is_sold: true,
      setIsSold: (value: boolean) => set(() => ({ is_sold: value })),
      setDueDate: (value: string) => set(() => ({ due_date: value })),
      setTitle: (value: string) => set(() => ({ title: value })),
      setLowPrice: (value: string) => set(() => ({ low_price: value })),
      setHighPrice: (value: string) => set(() => ({ high_price: value })),
      setDelivery: (value: string) => set(() => ({ delivery: value })),
      setOrderBy: (value: string) => set(() => ({ orderBy: value })),
      setSortBy: (value: string) => set(() => ({ sortBy: value })),
    }),
    { name: "search-storage" }
  )
);
