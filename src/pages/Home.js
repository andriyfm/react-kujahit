import React from "react";
import Layout from "../components/Layout";
import CTA from "../components/Cta";
import About from "../components/About";
import CompanyInfo from "../components/CompanyInfo";
import Brands from "../components/Brands";

const Home = props => {
  return (
    <Layout>
      <About />
      <CompanyInfo />
      <Brands />
      <CTA />
    </Layout>
  );
};

export default Home;
