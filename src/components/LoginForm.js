import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import { Button, Typography } from "@material-ui/core";
import FilledInput from "@material-ui/core/FilledInput";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: 0,
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  textField: {
    width: 200
  },
  fieldMargin: {
    marginRight: 100
  },
  marginCentered: {
    margin: "0 auto"
  }
}));

const LoginForm = ({
  onSubmit,
  handleUsernameChange,
  handlePasswordChange,
  changeValue,
  username,
  password
}) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div className={classes.marginCentered}>
        <Typography variant="h3" component="p">
          Please login to the application
        </Typography>
        <form onSubmit={onSubmit}>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
          >
            <InputLabel>Username</InputLabel>
            <FilledInput
              id="filled-adornment-username"
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
            <FormHelperText id="filled-weight-helper-text">
              Username is biansha
            </FormHelperText>
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="filled-weight-helper-text">
              Password is biansha
            </FormHelperText>
          </FormControl>
          <FormControl
            className={clsx(classes.root, classes.textField)}
            variant="filled"
          >
            <Button
              className={classes.withoutLabel}
              id="login"
              type="submit"
              variant="contained"
            >
              Sign in
            </Button>
          </FormControl>
        </form>
        <Typography variant="h6" component="p">
          If you are new to the application, please{" "}
          <Link onClick={() => changeValue(true)} to="/signup">
            {" "}
            click{" "}
          </Link>{" "}
          to signup.
        </Typography>
      </div>
    </div>
  );
};
export default LoginForm;
