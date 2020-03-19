import React from "react";
import Layout from "../components/Layout";
import CTA from "../components/Cta";
import About from "../components/About";
import FeatureProducts from "../components/FeatureProducts";
import CompanyInfo from "../components/CompanyInfo";
import Brands from "../components/Brands";

const Home = props => {
  return (
    <Layout>
      <About />
      <FeatureProducts />
      <CompanyInfo />
      <Brands />
      <CTA />
    </Layout>
  );
};

export default Home;
