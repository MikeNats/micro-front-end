import { AuthType } from "../../../models";

export type AuthReducerType = {
  data: AuthType | {};
  error: boolean | null;
  isLoading: boolean;
};

export enum ACTIONS {
  AUTH = "AUTH",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_FAIL = "AUTH_FAIL",
}

export type ActionsType = {
  type: string;
  payload: AuthReducerType;
};
