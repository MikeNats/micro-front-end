import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./entities";

const store = createStore(rootReducer, applyMiddleware(createLogger()));

export { store };
