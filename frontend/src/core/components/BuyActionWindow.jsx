import React, { useContext, useState } from "react";
import GeneralContext from "../../store/general-context";

import classes from "../css/BuyActionWindow.module.css";

const BuyActionWindow = ({ uid }) => {
  const [isDragging, setIsDragging] = useState(false);

  const generalContext = useContext(GeneralContext);

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  const handleDragStart = (event) => {
    const style = window.getComputedStyle(event.target, null);
    const offset =
      parseInt(style.getPropertyValue("left"), 10) -
      event.clientX +
      "," +
      (parseInt(style.getPropertyValue("top"), 10) - event.clientY);

    event.dataTransfer.setData("text/plain", offset);
    setTimeout(() => {
      setIsDragging(true);
    }, 0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const containerClass = isDragging
    ? `${classes.container} ${classes.dragging}`
    : `${classes.container}`;

  return (
    <div
      className={containerClass}
      id="buy-window"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <h3>Hello {uid}</h3>
      <button onClick={handleCancelClick}>Cancel</button>
    </div>
  );
};

export default BuyActionWindow;
