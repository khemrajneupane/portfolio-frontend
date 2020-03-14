import React from "react";
import LoginForm from "./LoginForm";
import { Button } from "@material-ui/core";

const logout = () => window.localStorage.removeItem("loggedUser");

const LogOut = () => {
  return (
    <div>
      <Button onClick={() => logout()}> /></Button>
     
    </div>
  );
};

export default LogOut;
