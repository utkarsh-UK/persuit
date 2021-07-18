import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import classes from "../css/Dashboard.module.css";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard / Persuit";
  }, []);

  return (
    <div className={classes.container}>
      <WatchList />
      <div className={classes.content}>
        <Route exact path="/" component={Summary} />
        <Route path="/orders" component={Orders} />
        <Route path="/holdings" component={Holdings} />
        <Route path="/positions" component={Summary} />
        <Route path="/funds" component={Orders} />
        <Route path="/apps" component={Orders} />
      </div>
    </div>
  );
};

export default Dashboard;
