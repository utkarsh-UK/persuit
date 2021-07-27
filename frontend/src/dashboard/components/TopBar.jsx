import React from "react";

import classes from "../css/TopBar.module.css";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes["indices-container"]}>
        <div className={classes.nifty}>
          <p className={classes.index}>NIFTY 50</p>
          <p className={classes["index-points"]}>15923.40</p>
          <p className={classes.percent}>-0.01%</p>
        </div>
        <div className={classes.sensex}>
          <p className={classes.index}>SENSEX</p>
          <p className={classes["index-points"]}>53140.06</p>
          <p className={classes.percent}>-0.04%</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default React.memo(TopBar);
