import React from "react";
import { Button, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
const Notification = props => {
  const message = props.notification;
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    width: "100%",
    textAlign: "center"
  };

  return (
    <div>
      {props.notification ? (
        <Alert onClose={() => <div>{props.notification}</div>}>{message}</Alert>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Notification;

/* let msg = message ? (
    <Typography variant="h3" component="p" style={style}>
      {message}
    </Typography>
  ) : (
    <div></div>
  );
  return msg; */
