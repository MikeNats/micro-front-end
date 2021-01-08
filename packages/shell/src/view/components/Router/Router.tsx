import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "../../../globalHooks/store";
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
          element={<Dashboard setTitle={pageTitle.dispatchPageTitle} />}
        />
        <Route
          path="orders/*"
          element={<Orders setTitle={pageTitle.dispatchPageTitle} />}
        />
        <Route
          path="profile/*"
          element={
            <Profile
              setTitle={pageTitle.dispatchPageTitle}
              link={auth.data.link}
              description={auth.data.description}
              fullName={auth.data.displayName}
              imgUrl={auth.data.img}
            />
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </React.Suspense>
  );
};

export default Router;
