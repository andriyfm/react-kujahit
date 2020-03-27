import React from "react";

import Layout from "../components/Layout";

import SectionCTA from "../sections/Cta";
import SectionAbout from "../sections/About";
import SectionFeatureProducts from "../sections/FeatureProducts";
import SectionCompanyInfo from "../sections/CompanyInfo";
import SectionBrands from "../sections/Brands";
import SectionProductCategory from "../sections/ProductCategory";
import { HeroStatic as SectionHeroStatic } from "../sections/Hero";

const Home = props => {
  return (
    <Layout>
      <SectionHeroStatic />
      <SectionAbout />
      <SectionFeatureProducts />
      <SectionProductCategory />
      <SectionCompanyInfo />
      <SectionBrands />
      <SectionCTA />
    </Layout>
  );
};

export default Home;
