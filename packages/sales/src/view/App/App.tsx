import React from "react";
import ReactDOM from "react-dom";
import { makeStyles, CircularProgress, Typography } from "@material-ui/core";
import DepositsWidget from "../components/DepositsWidget";
import TodayWidget from "../components/TodayWidget";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  text: {
    marginTop: theme.spacing(3),
  },
}));
const App = () => {
  const classes = useStyles();
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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
      <Typography className={classes.text}>Loading Shell</Typography>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
