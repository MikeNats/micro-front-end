import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import AppDrawer from "../components/AppDrawer";
import AppBar from "../components/AppBar/AppBar";
import { useAuth } from "./hooks/auth";
import Router from "../components/Router";
const App: React.FC = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(false);
  const toggleDrawer = (): void =>
    setIsDrawerOpened((drawerStatus) => !drawerStatus);

  const { dispatchAuth, isLoading } = useAuth();
  useEffect(() => {
    dispatchAuth({ userName: "mock", pass: "mock" }); //mock auth service
  }, []);
  return (
    <BrowserRouter>
      {isLoading ? (
        <Box
          display="flex"
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box display="flex" flex={1}>
          <AppBar isDrawerOpened={isDrawerOpened} toggleDrawer={toggleDrawer} />
          <AppDrawer
            isDrawerOpened={isDrawerOpened}
            toggleDrawer={toggleDrawer}
          />
          <Router />
        </Box>
      )}
    </BrowserRouter>
  );
};

export default App;
