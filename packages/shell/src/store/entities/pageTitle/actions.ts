import { createAction } from "redux-actions";
import { ACTIONS } from "./types";
const setPageTitle = createAction<number | undefined>(ACTIONS.SET_PAGE_TITLE);

export { setPageTitle };
