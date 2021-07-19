import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { AccessTimeOutlined } from "@material-ui/icons";

import classes from "../css/Funds.module.css";

const Funds = () => {
  useEffect(() => {
    document.title = "Funds / Persuit";
  }, []);

  return (
    <Fragment>
      <div className={classes.funds}>
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className={`${classes.btn} ${classes["btn-green"]}`}>
          Add funds
        </Link>
        <Link className={`${classes.btn} ${classes["btn-blue"]}`}>
          Withdraw
        </Link>
      </div>

      <div className={classes.row}>
        <div className={classes.col}>
          <span>
            <AccessTimeOutlined className={classes["section-icon"]} />
            <p>Equity</p>
          </span>

          <div className={classes.table}>
            <div className={classes.data}>
              <p>Available margin</p>
              <p className={`${classes.imp} ${classes.colored}`}>4,043.10</p>
            </div>
            <div className={classes.data}>
              <p>Used margin</p>
              <p className={classes.imp}>3,757.30</p>
            </div>
            <div className={classes.data}>
              <p>Available cash</p>
              <p className={classes.imp}>4,043.10</p>
            </div>
            <hr />
            <div className={classes.data}>
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className={classes.data}>
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className={classes.data}>
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className={classes.data}>
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className={classes.data}>
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className={classes.data}>
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className={classes.data}>
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className={classes.data}>
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className={classes.data}>
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className={classes.data}>
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className={classes.col}>
          <div className={classes.commodity}>
            <p>You don't have a commodity account</p>
            <Link className={`${classes.btn} ${classes["btn-blue"]}`}>
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Funds;
