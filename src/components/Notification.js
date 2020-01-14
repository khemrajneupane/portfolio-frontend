import React from "react";

const Notification = props => {
  const message = props.notification;
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  let msg = message ? <div style={style}>{message} </div> : <div></div>;
  return msg;
};

export default Notification;
