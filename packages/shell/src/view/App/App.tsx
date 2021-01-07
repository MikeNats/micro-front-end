import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import AppDrawer from "../AppDrawer";
import AppBar from "../AppBar/AppBar";
import { useAuth } from "./hooks/auth";
import { authService } from "../../services";
import Router from "../Router";
const App: React.FC = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(false);
  const toggleDrawer = () => setIsDrawerOpened((drawerStatus) => !drawerStatus);
  const { dispatchAuth, isLoading } = useAuth(authService);
  useEffect(() => {
    dispatchAuth({});
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
