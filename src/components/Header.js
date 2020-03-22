import React from "react";

import HeaderTop from "./header/HeaderTop";
import HeaderMid from "./header/HeaderMid";
import HeaderBot from "./header/HeaderBot";

export default () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMid />
      <HeaderBot />
    </header>
  );
};
