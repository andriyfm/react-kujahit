import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

import CartAndBalance from "../CartAndBalance";

/**
 * SEARCHBAR
 * @param {*} props
 */
export const Searchbar = props => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

/**
 * HEADER MIDDLE
 * @param {*} props
 */
export default function Middle(props) {
  return (
    <div className="header__middle">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12} className="text-left">
            <Searchbar />
          </Col>
          <Col md={6} className="text-right d-none d-md-block">
            <CartAndBalance />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
