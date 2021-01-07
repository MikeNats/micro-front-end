import { AuthType } from "../../../models";

export type UseAuthType = {
  dispatchAuth: Function;
  data: AuthType;
  error: boolean | null;
  isLoading: boolean;
};

export type usePagetitleType = {
  dispatchPageTitle: Function;
  pageTitle: string;
};
