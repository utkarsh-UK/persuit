import React, { useState, useRef } from "react";
import { Link, Redirect } from "react-router-dom";

import classes from "../css/Login.module.css";

import logoImage from "../../images/logo.png";
import AuthFooter from "../components/AuthFooter";
import { authenticate, signin } from "../helpers";
import { Fragment } from "react";

const initialState = {
  loading: false,
  error: "",
  isSuccess: false,
  didRedirect: false,
};

const Login = () => {
  const [authState, setAuthState] = useState(initialState);

  const userIdRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    setAuthState((prevAuth) => ({
      ...prevAuth,
      loading: true,
    }));

    const userID = userIdRef.current.value;
    const password = passwordRef.current.value;

    signin({ user_id: userID, password })
      .then((data) => {
        if (!data.success) {
          setAuthState((prevAuth) => ({
            ...prevAuth,
            loading: false,
            isSuccess: false,
            error: data.message,
          }));
          userIdRef.current.value = "";
          passwordRef.current.value = "";
        } else {
          const { token, user_id } = data.data;
          authenticate({ token, user_id }, () => {
            setAuthState((prevAuth) => ({
              ...prevAuth,
              isSuccess: true,
              loading: false,
              error: data.message,
              didRedirect: true,
            }));
          });
        }
      })
      .catch((err) => {
        setAuthState((prevAuth) => ({
          ...prevAuth,
          isSuccess: true,
          loading: false,
          error: err,
        }));
        userIdRef.current.value = "";
        passwordRef.current.value = "";
      });
  };

  const performRedirect = () => {
    if (authState.didRedirect) {
      return <Redirect to="/" />;
    } else {
      return <Fragment />;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes["form-container"]}>
        <img src={logoImage} alt="" className={classes.logo} />
        <h4>Login to Kite</h4>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User ID (eg: AB0001)"
            ref={userIdRef}
          />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <button type="submit" className={classes["btn-primary"]}>
            {authState.loading ? "Logging In" : "Login"}
          </button>
        </form>

        <Link to="/" className={classes["forgot-password"]}>
          {authState.error ? authState.error : "Forgot password?"}
        </Link>
      </div>

      <AuthFooter />
      {performRedirect()}
    </div>
  );
};

export default Login;
