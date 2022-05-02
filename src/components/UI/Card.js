import React from "react";
import classes from "./Card.module.css";

function Card({ children }) {
  return <div className={`${classes.card} my-3`}>{children}</div>;
}

export default Card;
