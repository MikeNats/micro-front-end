import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-dashboard-react/components/cardAvatarStyle.js";
import { CardAvatarPropsType } from "./types";
const useStyles = makeStyles(styles);

const CardAvatar = ({
  children,
  className,
  plain,
  profile,
  ...rest
}: CardAvatarPropsType) => {
  const classes = useStyles();
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [className]: className !== undefined,
  });
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
};

export default CardAvatar;
