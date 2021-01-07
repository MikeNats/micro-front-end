import { createAction } from "redux-actions";
import { ACTIONS } from "./types";

const auth = createAction(ACTIONS.AUTH);
const authSuccess = createAction(ACTIONS.AUTH_SUCCESS);
const authFail = createAction(ACTIONS.AUTH_FAIL);

export { auth, authSuccess, authFail };
