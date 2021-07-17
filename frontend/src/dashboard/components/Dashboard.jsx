import React from "react";

import classes from "../css/Dashboard.module.css";
import WatchList from "./WatchList";

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <WatchList />
      <div className={classes.dashboard}>Right</div>
    </div>
  );
};

export default Dashboard;
