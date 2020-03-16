import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CTA = props => {
  return (
    <section className="cta">
      <Container>
        <Row className="align-items-center">
          <Col lg={9} md={8}>
            <div className="cta__wrapper-message">
              <h2 className="cta__message">
                free shipping on all orders&nbsp;
                <span className="text-dark font-weight-bold">over $60</span>
              </h2>
            </div>
          </Col>
          <Col lg={3} md={4}>
            <div className="cta__wrapper-button">
              <Button variant="dark" className="cta__button">
                get started
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTA;
