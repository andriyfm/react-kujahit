import React from "react";

import Layout from "../components/Layout";
import CTA from "../components/Cta";
import Brands from "../components/Brands";
import FaqAndSkills from "../components/FaqAndSkills";

/**
 * ABOUT PAGE
 * @param {*} props
 */
export default function About(props) {
  return (
    <Layout>
      <FaqAndSkills />
      <Brands />
      <CTA />
    </Layout>
  );
}
