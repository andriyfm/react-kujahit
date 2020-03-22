import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import SocialMedia from "./SocialMedia";
import CartAndBalance from "./CartAndBalance";
import { DrawerContent, DrawerButton } from "./Drawer";

export const Top = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="header__top">
      <Container>
        {/* Desktop */}
        <Row className="align-items-center d-none d-md-flex">
          <Col md={6}>
            <div className="d-flex justify-content-between justify-content-md-start">
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
          <Col md={6} className="d-none d-md-block">
            <div className="d-flex justify-content-end">
              <div>
                <FontAwesomeIcon className="mr-2" icon="flag" />
                English
              </div>
              <div className="ml-4">
                <SocialMedia />
              </div>
            </div>
          </Col>
        </Row>

        {/* Mobile */}
        <Row className="align-items-center justify-content-between d-sm-flex d-md-none">
          <Col>
            <DrawerButton onClick={toggleDrawer} />
          </Col>
          <Col className="text-right">
            <CartAndBalance />
          </Col>
        </Row>
      </Container>

      <DrawerContent isOpen={isOpen} onDrawerClose={toggleDrawer} />
    </div>
  );
};

export const Middle = props => {
  return (
    <div className="header__middle">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12} className="text-left">
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
          <Col md={6} className="text-right d-none d-md-block">
            <CartAndBalance />
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
    <div className="header__bottom d-none d-md-block">
      <Container>
        <nav className="header__bottom-navbar">
          {pages.map(page => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a className="header__bottom-navbar_item" href="#" key={page.id}>
              {page.name}
            </a>
          ))}
        </nav>
      </Container>
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
