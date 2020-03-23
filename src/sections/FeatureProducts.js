import React from "react";
import _ from "lodash";
import { Container, Row, Col } from "react-bootstrap";
import Rating from "../components/Rating";

export const SectionHeader = props => {
  return (
    <Container>
      <h2 className="feature-products__title">featured products</h2>
      <p className="feature-products__description">
        Tempor aliquip amet duis laborum elit dolor ex eu.
      </p>
    </Container>
  );
};

export const SectionBody = props => {
  const products = _.range(4);

  return (
    <div className="feature-products__list">
      <Container>
        <Row>
          {products.map((product, i) => (
            <Col md={3} xs={6} key={i}>
              <div className="feature-products__item">
                <img
                  className="feature-products__item-thumbnail"
                  src={require("../assets/images/img1.jpg")}
                  alt="thumbnail"
                />
                <h3 className="feature-products__item-title">
                  product title here
                </h3>
                <div className="feature-products__item-price">$123.99</div>
                <Rating amount="3" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default props => {
  return (
    <section className="feature-products">
      <SectionHeader />
      <SectionBody />
    </section>
  );
};
