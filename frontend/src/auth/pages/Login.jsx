import React from "react";
import { Link } from "react-router-dom";

import classes from "../css/Login.module.css";

import logoImage from "../../images/logo.png";
import AuthFooter from "../components/AuthFooter";

const Login = ({ history }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    history.push("/dashboard");
  };

  return (
    <div className={classes.container}>
      <div className={classes["form-container"]}>
        <img src={logoImage} alt="" className={classes.logo} />
        <h4>Login to Kite</h4>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user-id"
            id="user-id"
            placeholder="User ID (eg: AB0001)"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit" className={classes["btn-primary"]}>
            Login
          </button>
        </form>

        <Link to="/" className={classes["forgot-password"]}>
          Forgot password?
        </Link>
      </div>

      <AuthFooter />
    </div>
  );
};

export default Login;
