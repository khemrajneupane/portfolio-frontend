import React from "react";

const logout = () =>
  window.localStorage.removeItem("loggedUser")
    ? window.location.reload(true)
    : window.location.reload(false);

const LogOut = () => {
  return <button onClick={() => logout()}>Logout</button>;
};

export default LogOut;
