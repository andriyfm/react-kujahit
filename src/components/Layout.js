import React, { Fragment } from "react";

import Header from "../sections/Header";
import { FooterTop, FooterBottom } from "../sections/Footer";

const Layout = props => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <footer>
        <FooterTop />
        <FooterBottom />
      </footer>
    </Fragment>
  );
};

export default Layout;
