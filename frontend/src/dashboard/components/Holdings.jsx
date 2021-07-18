import React, { Fragment } from "react";
import { holdings } from "../../core/data";

import classes from "../css/Holdings.module.css";

const Holdings = () => {
  return (
    <Fragment>
      <h3 className={classes.title}>Holdings (13)</h3>

      <div className={classes["order-table"]}>
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit
              ? `${classes.profit}`
              : `${classes.loss}`;
            const dayClass = stock.isLoss
              ? `${classes.loss}`
              : `${classes.profit}`;

            return (
              <tr key={index} className={classes.item}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className={classes.row}>
        <div className={classes.col}>
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className={classes.col}>
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className={classes.col}>
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Holdings;
