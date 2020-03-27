import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import SectionPageTitle from "../sections/PageTitle";
import SectionCTA from "../sections/Cta";
import Sidebar from "../sections/Sidebar";

/**
 * LAYOUT 2 COLUMNS
 * @param {*} props
 */
export const TwoColumns = props => {
  console.log(props.pageName);
  return (
    <Fragment>
      <Header />
      <Container>
        <SectionPageTitle name={props.pageName} />
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col>
            <main>{props.children}</main>
          </Col>
        </Row>
      </Container>
      <Footer>
        <SectionCTA />
      </Footer>
    </Fragment>
  );
};

/**
 * DEFAULT LAYOUT
 */
export default props => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
