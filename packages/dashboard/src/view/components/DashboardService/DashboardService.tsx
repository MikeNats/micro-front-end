import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Widget from "../Widget";
import { usePagetitle } from "@packages/store/entities/pageTitle/hooks";
import useStyles from "./styles";
const RecentOrders = React.lazy(() => import("order/RecentOrdersWidget"));
const SalesDeposits = React.lazy(() => import("sales/DepositsWidget"));
const SalesToday = React.lazy(() => import("sales/TodayWidget"));

const Dashboard = () => {
  const classes = useStyles();
  const { dispatchPageTitle } = usePagetitle();
  useEffect(() => {
    dispatchPageTitle("Dashboard");
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Widget height="240px">
              <SalesToday />
            </Widget>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Widget height="240px">
              <SalesDeposits />
            </Widget>
          </Grid>
          <Grid item xs={12}>
            <Widget height="500px">
              <RecentOrders />
            </Widget>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Dashboard;
