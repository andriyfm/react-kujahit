import React from "react";
import Layout from "../components/Layout";
import CTA from "../components/Cta";
import Brands from "../components/Brands";
import CompanyInfo from "../components/CompanyInfo";

const Home = props => {
  return (
    <Layout>
      <CompanyInfo />
      <Brands />
      <CTA />
    </Layout>
  );
};

export default Home;
