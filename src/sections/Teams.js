import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuid } from "uuid";

import { Section } from "../components/Section";
import SocialMedia from "../components/SocialMedia";

const DATA_TEAMS = [
  {
    id: uuid(),
    name: "Sarah",
    message: "Deserunt elit nostrud enim proident dolor non ut laboris.",
    avatar: require("../assets/images/avatar1.jpg")
  },
  {
    id: uuid(),
    name: "Dita",
    message: "Nostrud id labore sint adipisicing ad velit labore commodo",
    avatar: require("../assets/images/avatar2.jpg")
  },
  {
    id: uuid(),
    name: "Bebi",
    message: "Duis nulla tempor magna eu elit aliqua sunt.",
    avatar: require("../assets/images/avatar3.jpg")
  },
  {
    id: uuid(),
    name: "Rachel",
    message: "Commodo ipsum cillum minim irure velit magna.",
    avatar: require("../assets/images/avatar4.jpg")
  }
];

export default function Teams(props) {
  const sectionOption = {
    title: "meet out experts",
    description: "Ad occaecat pariatur enim laboris pariatur elit amet",
    headeralign: "center"
  };
  return (
    <Section className="teams" {...sectionOption}>
      <Container>
        <Row>
          {DATA_TEAMS.map(team => {
            return (
              <Col md={3} key={team.id}>
                <div className="teams__item">
                  <img
                    className="teams__item-avatar"
                    src={team.avatar}
                    alt={team.name}
                  />
                  <h3 className="teams__item-name">{team.name}</h3>
                  <p className="teams__item-message">{team.message}</p>
                  <SocialMedia />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Section>
  );
}
