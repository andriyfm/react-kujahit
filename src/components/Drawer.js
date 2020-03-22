import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DrawerButton = ({ onClick }) => {
  return (
    <FontAwesomeIcon
      className="drawer__button"
      icon="bars"
      size="2x"
      onClick={onClick}
    />
  );
};

export const DrawerCloseButton = ({ onClick }) => {
  return (
    <FontAwesomeIcon
      className="drawer__button"
      icon="times"
      size="2x"
      onClick={onClick}
    />
  );
};

export const DrawerContent = ({ isOpen, onDrawerClose }) => {
  console.log({ isOpen, onDrawerClose });
  const open = isOpen ? "open" : "";
  return (
    <section className={`drawer ${open}`}>
      <div className="drawer__wrapper">
        <div className="drawer__top">
          <DrawerCloseButton onClick={onDrawerClose} />
        </div>
        <div className="drawer__content">
          <h4>Drawer content {isOpen ? "true" : "false"}</h4>
        </div>
      </div>
      <div className="drawer__outer" onClick={onDrawerClose} />
    </section>
  );
};
