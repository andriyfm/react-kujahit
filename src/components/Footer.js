import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Footer Bottom
 * @param {*} props
 */
export const FooterTop = props => {
  return <h6>Footer Top</h6>;
};

/**
 * Footer Bottom
 * @param {*} props
 */
export const FooterBottom = props => {
  return (
    <section className="footer__bottom">
      <Container>
        <Row>
          <Col>
            <div className="footer__bottom-icons">
              <FontAwesomeIcon
                className="mx-1"
                icon={["fab", "cc-paypal"]}
                size="2x"
              />
              <FontAwesomeIcon
                className="mx-1"
                icon={["fab", "cc-visa"]}
                size="2x"
              />
              <FontAwesomeIcon
                className="mx-1"
                icon={["fab", "cc-mastercard"]}
                size="2x"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
