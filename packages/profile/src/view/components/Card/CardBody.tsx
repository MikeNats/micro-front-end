import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-dashboard-react/components/cardBodyStyle.js";
import { CardBodyPropsType } from "./types";
const useStyles = makeStyles(styles as any);

const CardBody = ({
  className,
  children,
  plain,
  profile,
  ...rest
}: CardBodyPropsType) => {
  const classes = useStyles();
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined,
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
};

export default CardBody;
