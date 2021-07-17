import React, { Fragment } from "react";

import Dashboard from "../components/Dashboard";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <Fragment>
      <TopBar />
      <Dashboard />
    </Fragment>
  );
};

export default Home;
