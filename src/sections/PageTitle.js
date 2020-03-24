import React from "react";
import { Container } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";

export default ({ name }) => {
  if (!name) return null;

  return (
    <section className="page-title">
      <Container>
        <h1 className="page-title__name">{name}</h1>
        <Breadcrumbs />
      </Container>
    </section>
  );
};
