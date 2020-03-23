import React, { Fragment } from "react";

import Header from "./header/Header";
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
