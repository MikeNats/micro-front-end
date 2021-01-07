import { combineReducers } from "redux";
import authReducer from "./auth/reducers";
import pageTitleReducer from "./pageTitle/reducers";

export default combineReducers({ ...authReducer, ...pageTitleReducer });
