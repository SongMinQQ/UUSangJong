import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface loginStore {
  isLogin: boolean;
  toggleLogin: (params: boolean) => void;
}
export const useLogin = create<loginStore>()(
  persist(
    (set) => ({
      isLogin: false,
      toggleLogin: (params) => set(() => ({ isLogin: params }))
    }),
    { name: 'login-storage' }
  )
)

const initialUserInfo = {
  nickname: '',
  realname: '',
  message: '',
  rold: '',
  email: '',
};

type UserInfo = typeof initialUserInfo;

interface userStore extends UserInfo {
  setUserInfo: (info: typeof initialUserInfo) => void;
  deleteUserInfo: () => void;
}
export const useUser = create<userStore>()(persist(
  (set) => ({
    ...initialUserInfo,
    setUserInfo: (info) => set(() => ({ ...info })),
    deleteUserInfo: () => set(() => ({ ...initialUserInfo }))
  }),
  { name: 'user-storage' }
)
)
