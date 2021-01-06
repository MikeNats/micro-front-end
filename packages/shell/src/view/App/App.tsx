import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import AppDrawer from "../AppDrawer";
import AppBar from "../AppBar/AppBar";
import { useAuth } from "@packages/store/entities/auth/hooks";
import { authService } from "../../services";
import Router from "../Router";

const App: React.FC = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(false);
  const toggleDrawer = () => setIsDrawerOpened((drawerStatus) => !drawerStatus);
  const { dispatchAuth, error, isLoading } = useAuth(authService);
  useEffect(() => {
    dispatchAuth({});
  }, []);
  return (
    <BrowserRouter>
      <Box display="flex" flex={1}>
        <AppBar isDrawerOpened={isDrawerOpened} toggleDrawer={toggleDrawer} />
        <AppDrawer
          isDrawerOpened={isDrawerOpened}
          toggleDrawer={toggleDrawer}
        />
        <Router />
      </Box>
    </BrowserRouter>
  );
};

export default App;
