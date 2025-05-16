// 읽기용 유저 정보
export interface UserInfo {
  email: string;
  realname: string;
  nickname: string;
}

// 전송용 유저 정보
export interface UserForm extends UserInfo {
  password?: string;
}
