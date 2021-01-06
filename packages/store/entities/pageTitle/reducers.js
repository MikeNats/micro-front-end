import { initialState } from "./state";
import { handleActions } from "redux-actions";
import { setPageTitle } from "./actions";

const reducers = handleActions(
  new Map([
    [
      setPageTitle,
      (state, action) => ({
        ...state,
        pageTitle: action.payload.pageTitle,
      }),
    ],
  ]),
  initialState
);

export default { pageTitle: reducers };
