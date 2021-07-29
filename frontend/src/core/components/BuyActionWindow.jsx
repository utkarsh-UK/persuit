import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import GeneralContext from "../../store/general-context";

import classes from "../css/BuyActionWindow.module.css";

const BuyActionWindow = ({ uid }) => {
  const [isDragging, setIsDragging] = useState(false);

  const generalContext = useContext(GeneralContext);

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  const handleDragStart = (event) => {
    const style = window.getComputedStyle(event.target, null);
    const offset =
      parseInt(style.getPropertyValue("left"), 10) -
      event.clientX +
      "," +
      (parseInt(style.getPropertyValue("top"), 10) - event.clientY);

    event.dataTransfer.setData("text/plain", offset);
    setTimeout(() => {
      setIsDragging(true);
    }, 0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const containerClass = isDragging
    ? `${classes.container} ${classes.dragging}`
    : `${classes.container}`;

  return (
    <div
      className={containerClass}
      id="buy-window"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className={classes.header}>
        <h3>
          Buy {uid} <span>NSE</span> x 1 Qty{" "}
        </h3>

        <div className={classes["market-options"]}>
          <label htmlFor="bse">
            <input type="radio" name="market" id="bse" defaultValue="bse" />
            BSE ₹212.75
          </label>

          <label htmlFor="nse">
            <input
              type="radio"
              name="market"
              id="nse"
              defaultValue="nse"
              checked
            />{" "}
            NSE ₹212.70
          </label>
        </div>
      </div>

      <div className={classes.tab}>
        <button>Regular</button>
        <button>Cover</button>
        <button>AMO</button>
      </div>

      <div className={classes["regular-order"]}>
        <div className={classes["order-validity"]}>
          <label>
            <input type="radio" name="order_validity" id="bse" value="bse" />
            Intraday <span>MIS</span>
          </label>

          <label>
            <input
              type="radio"
              name="order_validity"
              id="nse"
              value="nse"
              checked
            />{" "}
            Longterm <span>CNC</span>
          </label>
        </div>

        <div className={classes["inputs"]}>
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" name="qty" id="qty" defaultValue="1" />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              defaultValue="137.60"
            />
          </fieldset>
          <fieldset disabled>
            <legend>Trigger price</legend>
            <input type="number" name="trigger" id="trigger" disabled />
          </fieldset>
        </div>

        <div className={classes["options"]}>
          <span>More</span>

          <div className={classes["sub-order-type"]}>
            <label>
              <input type="radio" name="sub_order_type" />
              Market
            </label>

            <label>
              <input type="radio" name="sub_order_type" checked /> Limit
            </label>
          </div>

          <div className={classes["stop-loss-type"]}>
            <label>
              <input type="radio" name="stop_loss_type" id="bse" value="bse" />
              SL
            </label>

            <label>
              <input type="radio" name="stop_loss_type" id="nse" value="nse" />{" "}
              SL-M
            </label>
          </div>
        </div>
      </div>

      <div className={classes.buttons}>
        <span>Margin required ₹140.65</span>
        <div>
          <Link to="/" className={`${classes["btn"]} ${classes["btn-blue"]}`}>
            Buy
          </Link>
          <Link
            to=""
            className={`${classes["btn"]} ${classes["btn-grey"]}`}
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
