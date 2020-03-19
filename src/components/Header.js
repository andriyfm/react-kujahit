import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

export const Top = props => {
  return (
    <div className="header__top">
      <Container>
        <Row>
          <Col md={6}>
            <div className="d-flex justify-content-start">
              <div className="mr-5">
                <FontAwesomeIcon className="mr-2" icon="phone" />
                +6285974492535
              </div>
              <div>
                <FontAwesomeIcon className="mr-2" icon="envelope" />
                user@domain.com
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-end">
              <div>
                <FontAwesomeIcon className="mr-2" icon="phone" />
                +6285974492535
              </div>
              <div className="ml-5">
                <FontAwesomeIcon className="mr-2" icon="envelope" />
                user@domain.com
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const Middle = props => {
  return (
    <div className="header__middle">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-left">
            <InputGroup>
              <FormControl
                className="header__middle-search"
                placeholder="Search"
                aria-label="Search"
              />
              <InputGroup.Append>
                <InputGroup.Text className="header__middle-search-append">
                  <FontAwesomeIcon icon="search" />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col md={6} className="text-right">
            <div className="header__middle-price">
              <div className="header__middle-notif">
                <FontAwesomeIcon icon="shopping-cart" />
                <div className="header__middle-notif-length">+99</div>
              </div>
              <span>$330.99</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const Bottom = props => {
  return <div className="header__bottom">header bottom</div>;
};

export default () => {
  return (
    <header>
      <Top />
      <Middle />
      <Bottom />
    </header>
  );
};
