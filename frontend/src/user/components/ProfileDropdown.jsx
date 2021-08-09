import {
  AdjustOutlined,
  ExitToAppOutlined,
  GamepadOutlined,
  HelpOutlined,
  PermIdentityOutlined,
  PersonAddOutlined,
  ThumbsUpDownOutlined,
} from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { signout } from "../../auth/helpers";
import classes from "../css/ProfileDropdown.module.css";

const ProfileDropdown = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogoutClick = () => {
    signout()
      .then((_) => setIsLoggedOut(true))
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>Utkarsh Appasaheb Kore</h4>
        <p>utkarshkore98@gmail.com</p>
      </div>
      <hr />
      <div className={classes.settings}>
        <PermIdentityOutlined className={classes.icon} />
        <h6>
          My profile <span>/ Settings</span>
        </h6>
      </div>
      <hr />
      <div className={classes.menus}>
        <div className={classes.menu}>
          <AdjustOutlined className={classes.icon} />
          <h6>Console</h6>
        </div>
        <div className={classes.menu}>
          <AdjustOutlined className={classes.icon} />
          <h6>Coin</h6>
        </div>
        <div className={classes.menu}>
          <ThumbsUpDownOutlined className={classes.icon} />
          <h6>Support</h6>
        </div>
        <div className={classes.menu}>
          <PersonAddOutlined className={classes.icon} />
          <h6>Invite friends</h6>
        </div>
      </div>
      <hr />
      <div className={classes.menus}>
        <div className={classes.menu}>
          <PersonAddOutlined className={classes.icon} />
          <h6>Tour Kite</h6>
        </div>
        <div className={classes.menu}>
          <GamepadOutlined className={classes.icon} />
          <h6>Keyboard shortcuts</h6>
        </div>
        <div className={classes.menu}>
          <HelpOutlined className={classes.icon} />
          <h6>Help</h6>
        </div>
        <div className={classes.menu} onClick={handleLogoutClick}>
          <ExitToAppOutlined className={classes.icon} />
          <h6>Logout</h6>
        </div>
      </div>

      {isLoggedOut && <Redirect to="/" />}
    </div>
  );
};

export default ProfileDropdown;
