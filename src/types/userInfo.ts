export interface UserInfo {
  email: string;
  realname: string;
  nickname: string;
}

export interface UserForm extends UserInfo {
  password: string;
}
