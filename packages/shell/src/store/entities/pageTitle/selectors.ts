import { ApplicationSateType } from "../../types";
import { PageTitleReducerType } from "./types";

export const pageTitleSelector = (
  state: ApplicationSateType
): PageTitleReducerType => state.pageTitle;
