import React from "react";
import LoginForm from "./LoginForm";

const logout = () => window.localStorage.removeItem("loggedUser");
/*? window.location.reload(true)
    : window.location.reload(false);*/

const LogOut = () => {
  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
      <LoginForm />
    </div>
  );
};

export default LogOut;
