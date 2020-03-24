import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

export default ({ name }) => {
  if (!name) return null;

  return (
    <section className="page-title">
      <h1 className="page-title__name">{name}</h1>
      <Breadcrumbs />
    </section>
  );
};
