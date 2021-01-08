import { createAction } from "redux-actions";
import { ACTIONS } from "./types";
const setPageTitle = createAction<{ pageTitle: string }>(
  ACTIONS.SET_PAGE_TITLE
);

export { setPageTitle };
