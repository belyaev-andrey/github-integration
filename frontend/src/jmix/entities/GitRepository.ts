import { OwnerInfo } from "./OwnerInfo";
export class GitRepository {
  static NAME = "GitRepository";
  id?: string;
  name?: string | null;
  stargazersCount?: any | null;
  owner?: OwnerInfo | null;
}
export type GitRepositoryViewName = "_base" | "_instance_name" | "_local";
export type GitRepositoryView<
  V extends GitRepositoryViewName
> = V extends "_base"
  ? Pick<GitRepository, "id" | "name">
  : V extends "_instance_name"
  ? Pick<GitRepository, "id" | "name">
  : never;
