import React, { Fragment } from "react";

import { FooterBottom } from "./Footer";

const Layout = props => {
  return (
    <Fragment>
      <header>
        <h1>Header</h1>
      </header>
      <main>{props.children}</main>
      <footer>
        <FooterBottom />
      </footer>
    </Fragment>
  );
};

export default Layout;
