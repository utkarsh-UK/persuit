import React, { Fragment, useEffect } from "react";

import classes from "../css/Positions.module.css";

import { positions } from "../../core/data";

const Positions = () => {

    useEffect(() => {
        document.title = 'Positions / Persuit'
    }, []);

  return (
    <Fragment>
      <h3 className={classes.title}>Positions ({positions.length})</h3>

      <div className={classes["order-table"]}>
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock, index) => {
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
                <td>
                  {" "}
                  <p>{stock.product}</p>{" "}
                </td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>
              {positions
                .reduce(
                  (prev, curr) =>
                    prev + (curr.price * curr.qty - curr.avg * curr.qty),
                  0
                )
                .toFixed(2)}
            </td>

            <td></td>
          </tr>
        </table>
      </div>

    </Fragment>
  );
};

export default Positions;
