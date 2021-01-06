import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const DashboardService = React.lazy(() => import("dashboard/DashboardService"));
const OrderService = React.lazy(() => import("order/OrderService"));

const Router: React.FC = () => (
  <React.Suspense fallback={"Loading"}>
    <Routes>
      <Route path="dashboard/*" element={<DashboardService />} />
      <Route path="orders/*" element={<OrderService />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  </React.Suspense>
);

export default Router;
