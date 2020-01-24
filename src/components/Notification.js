import React from "react";
import { Alert } from "@material-ui/lab";
import { Typography } from "@material-ui/core";

const Notification = props => {
  const message = props.notification;
  return (
    <div>
      {props.notification ? (
        <div className="container">
          <Alert onClose={() => <Typography>{props.notification}</Typography>}>
            {message}
          </Alert>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Notification;
