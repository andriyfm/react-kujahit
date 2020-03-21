import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartAndBalance = props => {
  return (
    <div className="cart-and-balance__price">
      <div className="cart-and-balance__notif">
        <FontAwesomeIcon icon="shopping-cart" />
        <div className="cart-and-balance__notif-length">+99</div>
      </div>
      <span>$330.99</span>
    </div>
  );
};

export default CartAndBalance;
