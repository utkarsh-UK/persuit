import { Tooltip, Grow } from "@material-ui/core";
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
          <Tooltip
            title="Companies"
            placement="top"
            arrow
            aria-label="buy"
            TransitionComponent={Grow}
          >
            <li>1</li>
          </Tooltip>
          <Tooltip
            title="Bank"
            placement="top"
            arrow
            aria-label="buy"
            TransitionComponent={Grow}
          >
            <li>2</li>
          </Tooltip>
          <Tooltip
            title="Indices"
            placement="top"
            arrow
            aria-label="buy"
            TransitionComponent={Grow}
          >
            <li>3</li>
          </Tooltip>
          <Tooltip
            title="Hospitality"
            placement="top"
            arrow
            aria-label="buy"
            TransitionComponent={Grow}
          >
            <li>4</li>
          </Tooltip>
          <Tooltip
            title="First Stocks"
            placement="top"
            arrow
            aria-label="buy"
            TransitionComponent={Grow}
          >
            <li>5</li>
          </Tooltip>
        </ul>

        <Tooltip
          title="Marketwatch settings"
          placement="left"
          arrow
          aria-label="buy"
          TransitionComponent={Grow}
        >
          <SettingsOutlined className={classes.settings} />
        </Tooltip>
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
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          aria-label="buy"
          TransitionComponent={Grow}
        >
          <button className={classes.buy} onClick={handleBuyClick}>
            B
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          aria-label="sell"
          TransitionComponent={Grow}
        >
          <button className={classes.sell}>S</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Market depth (D)"
          placement="top"
          arrow
          aria-label="depth"
          TransitionComponent={Grow}
        >
          <button className={classes.action}>
            <List className={classes.icon} />
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Chart (C)"
          placement="top"
          arrow
          aria-label="chart"
          TransitionComponent={Grow}
        >
          <button className={classes.action}>
            <BarChartOutlined className={classes.icon} />
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Delete (del)"
          placement="top"
          arrow
          aria-label="delete"
          TransitionComponent={Grow}
        >
          <button className={classes.action}>
            <DeleteOutline className={classes.icon} />
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="More"
          placement="top"
          arrow
          aria-label="more"
          TransitionComponent={Grow}
        >
          <button className={classes.action}>
            <MoreHoriz className={classes.icon} />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
