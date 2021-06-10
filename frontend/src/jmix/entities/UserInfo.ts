export class UserInfo {
  static NAME = "UserInfo";
  id?: string;
  login?: string | null;
  avatarUrl?: string | null;
  email?: string | null;
  company?: string | null;
}
export type UserInfoViewName = "_base" | "_instance_name" | "_local";
export type UserInfoView<V extends UserInfoViewName> = V extends "_base"
  ? Pick<UserInfo, "id" | "login">
  : V extends "_instance_name"
  ? Pick<UserInfo, "id" | "login">
  : never;
