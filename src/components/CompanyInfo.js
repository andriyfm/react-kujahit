import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SocialMedia from "./SocialMedia";

export const Services = props => {
  return (
    <section className="company-info__services">
      <h2 className="company-info__title">our services</h2>
      <img
        className="company-info__services-thumb"
        src={require("../assets/images/img2.jpg")}
        alt="thumbnail"
      />
      <p className="company-info__description">
        Ut ea ea labore incididunt Lorem. Irure ea nisi sunt voluptate veniam.
        Magna occaecat consectetur occaecat quis pariatur reprehenderit fugiat
        excepteur amet ut voluptate tempor magna. Adipisicing eu ut ex ut sunt
        aliqua culpa consequat laborum consequat commodo. Occaecat mollit
        eiusmod labore nisi labore ea cupidatat.
      </p>
    </section>
  );
};

export const Posts = props => {
  return (
    <section className="company-info__posts">
      <h2 className="company-info__title">Posts</h2>
      <div className="company-info__posts-list">
        <div className="company-info__posts-item">
          <img
            className="company-info__posts-thumbnail"
            src={require("../assets/images/img1.jpg")}
            alt="thumbnail"
          />
          <div className="company-info__posts-detail">
            <h3 className="company-info__posts-title">Post title</h3>
            <p className="company-info__posts-description">
              Nulla id mollit amet aliqua consequat esse aliqua eiusmod eiusmod.
            </p>
          </div>
        </div>
        <div className="company-info__posts-item">
          <img
            className="company-info__posts-thumbnail"
            src={require("../assets/images/img1.jpg")}
            alt="thumbnail"
          />
          <div className="company-info__posts-detail">
            <h3 className="company-info__posts-title">Post title 2</h3>
            <p className="company-info__posts-description">
              Nulla id mollit amet aliqua consequat esse aliqua eiusmod eiusmod.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Address = props => {
  return (
    <section className="company-info__address">
      <h2 className="company-info__title">company address</h2>
      <p className="company-info__description">
        Et non consequat id nostrud consectetur sit minim ipsum sunt velit ipsum
        pariatur cillum in ex
      </p>
      <div className="company-info__address-list">
        <p className="company-info__address-item">
          <FontAwesomeIcon className="mr-2" icon={["fas", "map-marker"]} />
          795 South Park Avenue, Door 6 Wonderland
        </p>
        <p className="company-info__address-item">
          <FontAwesomeIcon className="mr-2" icon={["fas", "phone"]} />
          +440 875369208
        </p>
        <p className="company-info__address-item">
          <FontAwesomeIcon className="mr-2" icon={["fas", "paper-plane"]} />
          support@sitename.com
        </p>
      </div>
      <SocialMedia />
    </section>
  );
};

export default props => {
  return (
    <section className="company-info">
      <Container>
        <Row>
          <Col lg={4}>
            <Services />
          </Col>
          <Col lg={4}>
            <Posts />
          </Col>
          <Col lg={4}>
            <Address />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
