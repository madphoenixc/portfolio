import React from "react";
import classes from "./Loader.module.css";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <div className={classes.loader +" d-flex justify-content-center align-items-center"}>
      <Spinner animation="grow" />
    </div>
  );
}