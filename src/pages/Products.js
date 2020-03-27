import React from "react";
import { TwoColumns as Layout } from "../components/Layout";

import ProductBanner from "../sections/ProductBanner";

/**
 * PRODUCTS PAGE
 * @param {*} props
 */
export default props => {
  return (
    <Layout pageName="products">
      <ProductBanner />
      <section className="products__list">Products list</section>
    </Layout>
  );
};
