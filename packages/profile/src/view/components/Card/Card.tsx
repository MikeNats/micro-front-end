import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-dashboard-react/components/cardStyle.js";
import { CardPropsType } from "./types";
const useStyles = makeStyles(styles as any);

const Card = ({
  className,
  children,
  plain,
  profile,
  chart,
  ...rest
}: CardPropsType) => {
  const classes = useStyles();
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined,
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

export default Card;
