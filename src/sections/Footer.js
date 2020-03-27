import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Footer Bottom
 * @param {*} props
 */
export const FooterTop = props => {
  return (
    <section className="footer__top">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <h2 className="footer__top-title">Kujahit</h2>
            <p className="footer__top-description">
              Aute pariatur adipisicing culpa incididunt dolore occaecat ut
              pariatur duis do quis et quis qui. Veniam labore excepteur labore
              ullamco nulla cillum. Minim laborum minim do esse id qui elit esse
              exercitation tempor minim laborum cupidatat ad. Cupidatat sit nisi
              proident nulla non incididunt labore mollit qui velit.
            </p>
            <p className="footer__top-copyright">
              © 2020 The Kujahit, All Right Reserved Actionart
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
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

export default props => {
  return (
    <footer>
      {props.children}
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};
