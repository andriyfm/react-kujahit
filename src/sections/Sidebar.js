import React from "react";
import WidgetCard from "../components/WidgetCard";

/**
 * SIDEBAR
 */
export default props => {
  return (
    <aside>
      <WidgetCard name="popular items" />
      <WidgetCard name="recently viewed" />
    </aside>
  );
};
