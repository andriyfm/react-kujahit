import React from "react";

import Layout from "../components/Layout";
import SectionCTA from "../sections/Cta";
import SectionBrands from "../sections/Brands";
import SectionFaqAndSkills from "../sections/FaqAndSkills";
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
