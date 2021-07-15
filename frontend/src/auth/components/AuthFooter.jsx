import React from "react";

import classes from "../css/AuthFooter.module.css";

import playStoreImage from "../../images/play-store.png";
import appleLogoImage from "../../images/apple-logo.png";
import zerodhaLogoImage from "../../images/zerodha-logo.jpg";
import { Link } from "react-router-dom";

const AuthFooter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.icons}>
        <img src={playStoreImage} alt="" />
        <img src={appleLogoImage} alt="" />
      </div>

      <img src={zerodhaLogoImage} alt="" className={classes.zerodha} />

      <div className={classes["footer-desc"]}>
        <Link
          to="https://zerodha.com/open-account?c=RAINMT&utm_source=kite&utm_medium=web&utm_campaign=account"
          style={{ textDecoration: "none" }}
        >
          <p className={classes.signup}>Don't have an account? Signup now!</p>
        </Link>

        <p className={classes.info}>
          Zerodha Broking Limited: Member of NSE, BSE & CDSL – SEBI Reg. no.:
          INZ000031633, CDSL – SEBI Reg. no.: IN-DP-431-2019 | Zerodha
          Commodities Pvt. Ltd.: MCX Reg. no.: 46025
        </p>

        <p className={classes.version}>v3.0.0</p>
      </div>
    </div>
  );
};

export default AuthFooter;
