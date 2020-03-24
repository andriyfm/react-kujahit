import React, { useState } from "react";

import Layout from "../components/Layout";
import SectionPageTitle from "../sections/PageTitle";
import SectionCTA from "../sections/Cta";

export default props => {
  const [pageName] = useState("Page Name");

  return (
    <Layout>
      <SectionPageTitle name={pageName} />
      <SectionCTA />
    </Layout>
  );
};
