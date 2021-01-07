import { initialState } from "./state";
import { handleActions } from "redux-actions";
import { ACTIONS, AuthReducerType, ActionsType } from "./types";

const reducers = handleActions<AuthReducerType>(
  {
    [ACTIONS.AUTH]: (state: AuthReducerType) => ({
      ...state,
      isLoading: true,
    }),
    [ACTIONS.AUTH_SUCCESS]: (state: AuthReducerType, action: ActionsType) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
    [ACTIONS.AUTH_SUCCESS]: (state: AuthReducerType, action: ActionsType) => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
    }),
  },
  initialState
);

export default { auth: reducers };
