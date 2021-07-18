import React, { Fragment } from "react";
import { AccessTimeOutlined, PaymentOutlined } from "@material-ui/icons";

import classes from "../css/Summary.module.css";

const Summary = () => {
  return (
    <Fragment>
      <div className={classes.username}>
        <h6>Hi, Utkarsh</h6>
        <hr className={classes.divider} />
      </div>

      <div className={classes.section}>
        <span>
          <AccessTimeOutlined className={classes["section-icon"]} />
          <p>Equity</p>
        </span>

        <div className={classes.data}>
          <div className={classes.first}>
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className={classes.second}>
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className={classes.divider} />
      </div>

      <div className={classes.section}>
        <span>
          <PaymentOutlined className={classes["section-icon"]} />
          <p>Holdings (13)</p>
        </span>

        <div className={classes.data}>
          <div className={classes.first}>
            <h3 className={classes.profit}>
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className={classes.second}>
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className={classes.divider} />
      </div>
    </Fragment>
  );
};

export default Summary;
