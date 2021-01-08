import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "../../App/hooks/store";
const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const Orders = React.lazy(() => import("order/Orders"));
const Profile = React.lazy(() => import("profile/Profile"));
const Router: React.FC = () => {
  const { auth, pageTitle } = useStore();

  return (
    <React.Suspense fallback={"Loading"}>
      <Routes>
        <Route
          path="dashboard/*"
          element={
            <Dashboard
              store={{ dispatchPageTitle: pageTitle.dispatchPageTitle }}
            />
          }
        />
        <Route
          path="orders/*"
          element={
            <Orders
              store={{ dispatchPageTitle: pageTitle.dispatchPageTitle }}
            />
          }
        />
        <Route
          path="profile/*"
          element={
            <Profile
              store={{
                dispatchPageTitle: pageTitle.dispatchPageTitle,
                link: auth.data.link,
                description: auth.data.description,
                displayName: auth.data.displayName,
                img: auth.data.img,
              }}
            />
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </React.Suspense>
  );
};

export default Router;
