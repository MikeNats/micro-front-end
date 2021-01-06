import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import OrderRow from "../OrderRow";
import { OrderType } from "../../../models";
import { getOrders } from "../../../services";

const RecentOrdersWidget: React.FC = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  useEffect(() => {
    getOrders().then((data) => {
      setOrders(data);
    });
  }, []);
  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Orders
      </Typography>
      <Box flex={1}>
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
              <OrderRow {...order} key={order.id} />
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box mt={3}>
        <Button color="primary">See more orders</Button>
      </Box>
    </Box>
  );
};

export default RecentOrdersWidget;
