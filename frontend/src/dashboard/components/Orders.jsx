import React from "react";
import { Link } from "react-router-dom";
import { MenuBookOutlined } from "@material-ui/icons";

import classes from "../css/Orders.module.css";

const Orders = () => {
  return (
    <div className={classes.orders}>
      <div className={classes["no-orders"]}>
        <MenuBookOutlined className={classes.icon} />
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className={classes.btn}>Get started</Link>
      </div>
    </div>
  );
};

export default Orders;
