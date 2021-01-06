import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@material-ui/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";

import { getSales } from "../../../services";

const TodayWidget: React.FC = () => {
  const theme = useTheme();
  const [sales, setSales] = useState([]);
  useEffect(() => {
    getSales().then((sales) => setSales(sales));
  }, []);
  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Today
      </Typography>
      <ResponsiveContainer>
        <LineChart
          data={sales}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TodayWidget;
