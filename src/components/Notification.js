import React from "react";
import { Typography } from "@material-ui/core";
const Notification = props => {
  const message = props.notification;
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    width: "100%",
    textAlign: "center"
  };

  let msg = message ? (
    <Typography variant="h3" component="p" style={style}>
      {message}
    </Typography>
  ) : (
    <div></div>
  );
  return msg;
};

export default Notification;
