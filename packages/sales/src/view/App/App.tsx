import React from "react";
import ReactDOM from "react-dom";
import { CircularProgress, Typography } from "@material-ui/core";
import DepositsWidget from "../components/DepositsWidget";
import TodayWidget from "../components/TodayWidget";
import useStyles from "./styles";
const classes = useStyles();
const App = () => {
  return (
    <React.Suspense fallback={<LoadingShell />}>
      <Typography className={classes.text}>Deposits Widget</Typography>

      <DepositsWidget />
      <Typography className={classes.text}>Today Widget</Typography>

      <TodayWidget />
    </React.Suspense>
  );
};

function LoadingShell() {
  return (
    <div className={classes.root}>
      <CircularProgress />
      <Typography className={classes.text}>Loading Shell</Typography>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
