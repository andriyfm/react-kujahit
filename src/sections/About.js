import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";

const About = props => {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col md={7} className="mb-sm-4">
            <h2 className="about__title">about us</h2>
            <p className="about__text">
              Mollit qui enim aliquip tempor. Commodo ut in excepteur cupidatat
              dolore adipisicing dolore aliqua dolor laborum officia ex. Commodo
              Lorem aliquip ad labore deserunt laborum consectetur.
            </p>
            <p className="about__text">
              Mollit cupidatat nostrud laborum exercitation eu voluptate.
              Laborum sunt et officia laboris. Et voluptate eiusmod est est
              magna incididunt sint. Est do pariatur esse quis officia ex ea
              nostrud sunt.
            </p>
            <SocialMedia />
          </Col>
          <Col md={5}>
            <img
              className="about__thumbnail"
              src={require("../assets/images/img1.jpg")}
              alt="thumbnail"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
