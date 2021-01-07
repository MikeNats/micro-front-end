import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { store } from "../store";
import App from "./App/App";
import ErrorBoundary from "./ErrorBoundary";
const Shell: React.FC = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

export default Shell;

ReactDOM.render(<Shell />, document.getElementById("root"));
