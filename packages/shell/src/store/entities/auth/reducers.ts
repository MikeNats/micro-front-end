import { initialState } from "./state";
import { handleActions } from "redux-actions";
import { ACTIONS, AuthReducerType, ActionsType } from "./types";

const reducers = handleActions(
  {
    [ACTIONS.AUTH]: (state: AuthReducerType) => ({
      ...state,
      isLoading: true,
    }),
    [ACTIONS.AUTH_SUCCESS]: (state: AuthReducerType, action: ActionsType) => ({
      ...state,
      isLoading: false,
      data: action.payload.data,
    }),
    [ACTIONS.AUTH_FAIL]: (state: AuthReducerType, action: ActionsType) => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
    }),
  },
  initialState
);

export default { auth: reducers };
