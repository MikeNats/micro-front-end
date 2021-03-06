import React from "react";
import { Divider, Drawer, IconButton } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import clsx from "clsx";
import useStyles from "./styles";
import Nav from "../Nav";
import { DrawerHookType } from "../../App/types";
const AppDrawer = ({ isDrawerOpened, toggleDrawer }: DrawerHookType) => {
  const classes = useStyles();
  const onClickHandler = (): void => toggleDrawer();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !isDrawerOpened && classes.drawerPaperClose
        ),
      }}
      open={isDrawerOpened}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={onClickHandler}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <Nav />
    </Drawer>
  );
};

export default AppDrawer;
