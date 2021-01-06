import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { OrderRowType } from "./types";

const OrderRow = ({
  id,
  date,
  name,
  shipTo,
  paymentMethod,
  amount,
}: OrderRowType): React.ReactNode => (
  <TableRow key={id}>
    <TableCell>{date}</TableCell>
    <TableCell>{name}</TableCell>
    <TableCell>{shipTo}</TableCell>
    <TableCell>{paymentMethod}</TableCell>
    <TableCell align="right">{amount}</TableCell>
  </TableRow>
);

export default OrderRow as React.ComponentType;
