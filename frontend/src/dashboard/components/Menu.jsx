import React from "react";

import classes from "../css/Menu.module.css";

import logoImage from "../../images/logo.png";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuClass = `${classes.menu}`;

  return (
    <div className={classes["menu-container"]}>
      <img src={logoImage} alt="Kite" className={classes.logo} />
      <div className={classes.menus}>
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders">
              <p className={menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings">
              <p className={menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions">
              <p className={menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds">
              <p className={menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps">
              <p className={menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className={classes.profile}>
          <div className={classes.avatar}>UK</div>
          <p className={classes.username}>AT9190</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
