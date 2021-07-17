import React, { Fragment } from "react";
import Dashboard from "../components/Dashboard";
import TopBar from "../components/TopBar";

import classes from "../css/Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <TopBar />
      <Dashboard />
    </Fragment>
  );
};

export default Home;
