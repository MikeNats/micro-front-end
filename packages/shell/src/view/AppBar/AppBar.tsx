import React from "react";
import clsx from "clsx";
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { usePagetitle } from "../App/hooks/pageTitle";
import useStyles from "./styles";
import { DrawerHookType } from "../App/types";
const AppBar = ({ isDrawerOpened, toggleDrawer }: DrawerHookType) => {
  const classes = useStyles();
  const { pageTitle } = usePagetitle();
  return (
    <MuiAppBar
      position="absolute"
      className={clsx(classes.appBar, isDrawerOpened && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void =>
            toggleDrawer()
          }
          className={clsx(
            classes.menuButton,
            isDrawerOpened && classes.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          {pageTitle}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
