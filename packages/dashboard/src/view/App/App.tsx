import React from "react";
import ReactDOM from "react-dom";
import { CircularProgress, Typography } from "@material-ui/core";
import useStyles from "./styles";
const Shell = React.lazy(() => import("shell/Shell"));
const App = () => (
  <React.Suspense fallback={<LoadingShell />}>
    <Shell />
  </React.Suspense>
);

function LoadingShell() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
      <Typography className={classes.text}>Loading Shell</Typography>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
