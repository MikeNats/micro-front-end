import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { usePagetitle } from "../App/hooks/pageTitle";
import { useAuth } from "../App/hooks/auth";
const DashboardService = React.lazy(() => import("dashboard/DashboardService"));
const OrderService = React.lazy(() => import("order/OrderService"));
const Router: React.FC = () => {
  const { dispatchPageTitle } = usePagetitle();

  return (
    <React.Suspense fallback={"Loading"}>
      <Routes>
        <Route
          path="dashboard/*"
          element={<DashboardService store={{ dispatchPageTitle }} />}
        />
        <Route
          path="orders/*"
          element={<OrderService store={{ dispatchPageTitle }} />}
        />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </React.Suspense>
  );
};

export default Router;
