import React from "react";
import { TwoColumns as Layout } from "../components/Layout";

import ProductBanner from "../sections/ProductBanner";
import ProductList from "../sections/ProductList";

/**
 * PRODUCTS PAGE
 * @param {*} props
 */
export default props => {
  return (
    <Layout pageName="products">
      <ProductBanner />
      <ProductList />
    </Layout>
  );
};
