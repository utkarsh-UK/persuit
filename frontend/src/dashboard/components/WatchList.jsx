import {
  BarChartOutlined,
  DeleteOutline,
  KeyboardArrowDown,
  KeyboardArrowUp,
  List,
  MoreHoriz,
  SettingsOutlined,
} from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { watchlist } from "../../core/data";
import GeneralContext from "../../store/general-context";
import classes from "../css/WatchList.module.css";

const WatchList = () => {
  return (
    <div className={classes.container}>
      <div className={classes["search-container"]}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className={classes.search}
        />
        <span className={classes.counts}> 9 / 50</span>
      </div>

      <ul className={classes["list"]}>
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
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

        <SettingsOutlined className={classes.settings} />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleListMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleListMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleListMouseEnter} onMouseLeave={handleListMouseLeave}>
      <div className={classes.item}>
        <p className={stock.isDown ? `${classes.down}` : `${classes.up}`}>
          {" "}
          {stock.name}{" "}
        </p>
        <div className={classes["item-info"]}>
          <span className={classes.percent}> {stock.percent} </span>
          {stock.isDown ? (
            <KeyboardArrowDown className={classes.down} />
          ) : (
            <KeyboardArrowUp className={classes.up} />
          )}
          <span className={classes.price}> {stock.price} </span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className={classes.actions}>
      <span>
        <button className={classes.buy} onClick={handleBuyClick}>
          B
        </button>
      </span>
      <span>
        <button className={classes.sell}>S</button>
      </span>
      <span>
        <button className={classes.action}>
          <List className={classes.icon} />
        </button>
      </span>
      <span>
        <button className={classes.action}>
          <BarChartOutlined className={classes.icon} />
        </button>
      </span>
      <span>
        <button className={classes.action}>
          <DeleteOutline className={classes.icon} />
        </button>
      </span>
      <span>
        <button className={classes.action}>
          <MoreHoriz className={classes.icon} />
        </button>
      </span>
    </span>
  );
};
