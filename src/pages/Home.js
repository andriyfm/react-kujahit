import React from "react";
import Layout from "../components/Layout";
import CTA from "../components/Cta";
import Brands from "../components/Brands";

const Home = props => {
  return (
    <Layout>
      <Brands />
      <CTA />
    </Layout>
  );
};

export default Home;
