import React from "react";

const DATA_IMAGE = require("../assets/images/img1.jpg");

/**
 * PRODUCT BANNER
 */
export default props => {
  return (
    <section className="product-banner">
      <img src={DATA_IMAGE} alt="product-banner" />
    </section>
  );
};
