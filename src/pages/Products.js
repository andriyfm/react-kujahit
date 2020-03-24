import React from "react";
import { TwoColumns as Layout } from "../components/Layout";

/**
 * PRODUCTS PAGE
 * @param {*} props
 */
export default props => {
  return (
    <Layout pageName="products">
      <section className="products__banner">Product banner</section>
      <section className="products__list">Products list</section>
    </Layout>
  );
};
