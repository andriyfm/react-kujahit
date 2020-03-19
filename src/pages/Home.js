import React from "react";
import Layout from "../components/Layout";
import CTA from "../components/Cta";
import About from "../components/About";
import FeatureProducts from "../components/FeatureProducts";
import CompanyInfo from "../components/CompanyInfo";
import Brands from "../components/Brands";
import ProductCategory from "../components/ProductCategory";
import Hero from "../components/Hero";

const Home = props => {
  return (
    <Layout>
      <Hero />
      <About />
      <FeatureProducts />
      <ProductCategory />
      <CompanyInfo />
      <Brands />
      <CTA />
    </Layout>
  );
};

export default Home;
