import React from "react";
import { watchlist } from "../../core/data";

import classes from "../css/WatchList.module.css";

const WatchList = () => {
  return (
    <div className={classes.container}>
      <div className={classes["search-container"]}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy bse, nifty fut weekly, gold mcx"
          className={classes.search}
        />
        <span className={classes.counts}> 9 / 50</span>
      </div>

      <ul className={classes["list"]}>
        {watchlist.map((stock, index) => (
          <li>
            <div className={classes.item}>
              <p> {stock.name} </p>
              <div className={classes["item-info"]}>
                <span className={classes.percent}> {stock.percent} </span>
                <span className={classes.direction}>&#10093;</span>
                <span className={classes.price}> {stock.price} </span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className={classes["watchlist-number"]}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>

        <p>Set</p>
      </div>
    </div>
  );
};

export default WatchList;
