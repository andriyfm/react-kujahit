import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";

import SocialMedia from "./SocialMedia";
import CartAndBalance from "./CartAndBalance";
import { DrawerContent, DrawerButton } from "./Drawer";

/**
 * HEADER TOP DESKTOP
 * @param {*} props
 */
export const HeaderTopDesktop = props => {
  return (
    <Container>
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
    </Container>
  );
};

/**
 * HEADER TOP MOBILE
 * @param {*} param0
 */
export const HeaderTopMobile = ({ toggleDrawer }) => {
  return (
    <Container>
      <Row className="align-items-center justify-content-between d-sm-flex d-md-none">
        <Col>
          <DrawerButton onClick={toggleDrawer} />
        </Col>
        <Col className="text-right">
          <CartAndBalance />
        </Col>
      </Row>
    </Container>
  );
};

/**
 * HEADER TOP
 * @param {*} props
 */
export default function HeaderTop(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="header__top">
      <HeaderTopDesktop />
      <HeaderTopMobile toggleDrawer={toggleDrawer} />
      <DrawerContent isOpen={isOpen} onDrawerClose={toggleDrawer} />
    </div>
  );
}
