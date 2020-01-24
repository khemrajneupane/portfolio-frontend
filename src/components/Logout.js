import React from "react";
import LoginForm from "./LoginForm";
import { Button } from "@material-ui/core";

const logout = () => window.localStorage.removeItem("loggedUser");

const LogOut = () => {
  return (
    <div>
      <Button onClick={() => logout()}>Logout</Button>
      <LoginForm />
    </div>
  );
};

export default LogOut;
