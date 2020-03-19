import React, { Fragment } from "react";

import Header from "./Header";
import { FooterTop, FooterBottom } from "./Footer";

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
