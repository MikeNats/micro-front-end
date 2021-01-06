import React from "react";
import {
  LinkTypeMap,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as UserIcon,
} from "@material-ui/icons";
import { Link, useMatch } from "react-router-dom";
import { ListItemLinkType } from "./types";

const ListItemLink = ({ to, icon, text }: ListItemLinkType) => {
  const selected = useMatch(to);
  const CustomLink = React.useMemo(
    () =>
      React.forwardRef<LinkTypeMap, any>((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem selected={!!selected} button component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </li>
  );
};

const Nav: React.FC = () => (
  <List>
    <ListItemLink to="dashboard" icon={<DashboardIcon />} text="Dashboard" />
    <ListItemLink to="orders" icon={<ShoppingCartIcon />} text="Orders" />
    <ListItemLink to="profile" icon={<UserIcon />} text="Profile" />
  </List>
);

export default Nav;
