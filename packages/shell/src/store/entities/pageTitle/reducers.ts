import { initialState } from "./state";
import { handleActions } from "redux-actions";
import { ACTIONS, ActionsType, PageTitleReducerType } from "./types";

const reducers = handleActions<PageTitleReducerType>(
  {
    [ACTIONS.SET_PAGE_TITLE]: (
      state: PageTitleReducerType,
      action: ActionsType
    ) => ({
      ...state,
      pageTitle: action.payload.pageTitle,
    }),
  },
  initialState
);

export default { pageTitle: reducers };
