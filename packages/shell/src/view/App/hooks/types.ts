import { AuthType } from "../../../models";

export type UseAuthType = {
  dispatchAuth: (title: any) => void;
  data: AuthType;
  error: boolean | null;
  isLoading: boolean;
};

export type usePagetitleType = {
  dispatchPageTitle: (title: any) => void;
  pageTitle: string;
};
