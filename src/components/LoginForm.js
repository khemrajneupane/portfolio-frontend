import React from "react";
export const Input = ({ text, inputValue, handler }) => {
  return (
    <div>
      {text}: <input value={inputValue} onChange={handler} />
    </div>
  );
};
const Button = ({ type, text }) => {
  return <button type={type}>{text}</button>;
};

const LoginForm = ({
  onSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
}) => {
  return (
    <div>
      <p>Login With Credentials</p>

      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          name="username"
          type="text"
          value={username}
          placeholder="biansha"
          onChange={handleUsernameChange}
        />
        <input
          className="form-control"
          name="password"
          type="password"
          value={password}
          placeholder="biansha"
          onChange={handlePasswordChange}
        />
        <Button type="submit" text="submit" />
      </form>
    </div>
  );
};
export default LoginForm;
