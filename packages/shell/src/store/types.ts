import { AuthReducerType } from "./entities/auth/types";
import { PageTitleReducerType } from "./entities/pageTitle/types";

export interface ApplicationSateType {
  auth: AuthReducerType;
  pageTitle: PageTitleReducerType;
}
