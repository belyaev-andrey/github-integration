export class OwnerInfo {
  static NAME = "OwnerInfo";
  id?: string;
  login?: string | null;
  avatarUrl?: string | null;
}
export type OwnerInfoViewName = "_base" | "_instance_name" | "_local";
export type OwnerInfoView<V extends OwnerInfoViewName> = V extends "_base"
  ? Pick<OwnerInfo, "id" | "login">
  : V extends "_instance_name"
  ? Pick<OwnerInfo, "id" | "login">
  : never;
