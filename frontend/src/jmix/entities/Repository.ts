import { UserInfo } from "./UserInfo";
import {HasId} from "@haulmont/jmix-react-core";
export class Repository {
  static NAME = "Repository";
  id?: string;
  name?: string | null;
  stargazersCount?: any | null;
  owner?: UserInfo | null;
}
export type RepositoryViewName = "_base" | "_instance_name" | "_local";
export type RepositoryView<V extends RepositoryViewName> = V extends "_base"
  ? Pick<Repository, "id" | "name">
  : V extends "_instance_name"
  ? Pick<Repository, "id" | "name">
  : never;