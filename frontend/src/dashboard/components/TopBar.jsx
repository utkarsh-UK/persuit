import React, { useState } from "react";
import { useEffect } from "react";
import { isAuthenticated } from "../../auth/helpers";

import classes from "../css/TopBar.module.css";
import { getMarketOverview } from "../helpers";
import Menu from "./Menu";

const initialIndexState = [
  {
    index_name: "Nifty 50",
    index_value: 0.0,
    change: 0.0,
    is_up_direction: true,
  },
  {
    index_name: "Sensex",
    index_value: 0.0,
    change: 0.0,
    is_up_direction: true,
  },
];

const TopBar = () => {
  const [indexData, setIndexData] = useState(initialIndexState);

  const token = isAuthenticated();

  useEffect(() => {
    getMarketOverview(token)
      .then((data) => {
        console.log(data);
        setIndexData([...data]);
      })
      .catch((err) => {
        console.error("Error occurred while fetching market overview ", err);
      });
  }, []);

  const [nifty, sensex] = indexData;

  return (
    <div className={classes.container}>
      <div className={classes["indices-container"]}>
        <div className={classes.nifty}>
          <p className={classes.index}> {nifty.index_name} </p>
          <p className={classes["index-points"]}>
            {nifty.index_value.toFixed(2)}{" "}
          </p>
          <p className={classes.percent}> {nifty.change} </p>
        </div>
        <div className={classes.sensex}>
          <p className={classes.index}>{sensex.index_name}</p>
          <p className={classes["index-points"]}>
            {sensex.index_value.toFixed(2)}
          </p>
          <p className={classes.percent}>{sensex.change}</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default React.memo(TopBar);
