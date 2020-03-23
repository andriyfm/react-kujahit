import React from "react";

import Layout from "../components/Layout";
import SectionCTA from "../components/Cta";
import SectionBrands from "../components/Brands";
import SectionFaqAndSkills from "../components/FaqAndSkills";
import SectionTeam from "../sections/Teams";

/**
 * ABOUT PAGE
 * @param {*} props
 */
export default function About(props) {
  return (
    <Layout>
      <SectionTeam />
      <SectionFaqAndSkills />
      <SectionBrands />
      <SectionCTA />
    </Layout>
  );
}
