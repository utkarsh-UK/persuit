import React, { useState } from "react";

import classes from "../css/Menu.module.css";

import logoImage from "../../images/logo.png";
import { Link } from "react-router-dom";
import ProfileDropdown from "../../user/components/ProfileDropdown";

const Menu = (props) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = `${classes.menu}`;
  const menuClassWithActive = `${classes.menu} ${classes.selected}`;

  return (
    <div className={classes["menu-container"]}>
      <img src={logoImage} alt="Kite" className={classes.logo} />
      <div className={classes.menus}>
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p
                className={selectedMenu === 0 ? menuClassWithActive : menuClass}
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p
                className={selectedMenu === 1 ? menuClassWithActive : menuClass}
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p
                className={selectedMenu === 2 ? menuClassWithActive : menuClass}
              >
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p
                className={selectedMenu === 3 ? menuClassWithActive : menuClass}
              >
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p
                className={selectedMenu === 4 ? menuClassWithActive : menuClass}
              >
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p
                className={selectedMenu === 5 ? menuClassWithActive : menuClass}
              >
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className={classes.profile} onClick={handleProfileClick}>
          <div className={classes.avatar}>UK</div>
          <p className={classes.username}>AT9190</p>
        </div>
        {isProfileDropdownOpen && <ProfileDropdown history={props.history} />}
      </div>
    </div>
  );
};

export default Menu;
