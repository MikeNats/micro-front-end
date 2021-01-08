import { AuthReducerType } from "./types";
export const initialState: AuthReducerType = {
  isLoading: false,
  error: null,
  data: { email: "", displayName: "" },
};
