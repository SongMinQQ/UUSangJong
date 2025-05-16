export interface Login {
  email: string | undefined;
  password: string | undefined;
}

export interface LoginResponse {
  message: string; // "로그인 성공 시 SUCCESS 반환함 참고"
}

export interface CheckLogin {
  email: string;
  nickname: string;
  message: string;
  rold: string;
  realname: string;
}
