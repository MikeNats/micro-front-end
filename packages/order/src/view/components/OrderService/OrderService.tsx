import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getOrders } from "../../../services";
import useStyles from "./styles";
import OrderRow from "../OrderRow";
import { usePagetitle } from "@packages/store/entities/pageTitle/hooks";
import { OrderType } from "../../../models";
const OrderService: React.FC = () => {
  const classes = useStyles();
  const [orders, setOrders] = useState<OrderType[]>([]);
  const { dispatchPageTitle } = usePagetitle();
  useEffect(() => {
    dispatchPageTitle("Orders");
    getOrders().then((data) => {
      setOrders(data);
    });
  }, []);
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography
              component="h1"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Orders
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Ship To</TableCell>
                  <TableCell>Payment Method</TableCell>
                  <TableCell align="right">Sale Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <OrderRow key={order.id} {...order} />
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Container>
    </main>
  );
};

export default OrderService;
