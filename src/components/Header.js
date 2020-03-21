import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

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
                <FontAwesomeIcon className="mr-2" icon="us" />
                English
              </div>
              <div className="ml-4">
                <SocialMedia />
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
  const [pages] = useState([
    {
      id: "1",
      name: "home"
    },
    {
      id: "2",
      name: "about"
    },
    {
      id: "3",
      name: "woman"
    },
    {
      id: "4",
      name: "men"
    },
    {
      id: "5",
      name: "accessories"
    },
    {
      id: "6",
      name: "blog"
    },
    {
      id: "7",
      name: "contact"
    },
    {
      id: "8",
      name: "pages"
    }
  ]);
  return (
    <div className="header__bottom">
      <nav className="header__bottom-navbar">
        {pages.map(page => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a className="header__bottom-navbar_item" href="#" key={page.id}>
            {page.name}
          </a>
        ))}
      </nav>
    </div>
  );
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
