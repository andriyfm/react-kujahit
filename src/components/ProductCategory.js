import React from "react";
import _ from "lodash";
import { Container, Row, Col } from "react-bootstrap";

const ProductCategory = props => {
  const categories = _.range(4);

  return (
    <section className="product-category">
      <Container>
        <Row>
          <Col md={4} sm={12} className="d-none d-md-block">
            <img
              className="product-category__cover"
              src={require("../assets/images/img1.jpg")}
              alt="product-category-cover"
            />
          </Col>
          <Col md={8} sm={12}>
            <div className="product-category__list">
              <Row>
                {categories.map((item, i) => {
                  return (
                    <Col key={i} xs={6}>
                      <div className="product-category__list-item">
                        <h3 className="product-category__list-item__title">
                          top 10 coat
                        </h3>
                        <p className="product-category__list-item__desc">
                          Non consequat nostrud fugiat et non eiusmod
                          reprehenderit mollit labore eu irure sint ut
                        </p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductCategory;
