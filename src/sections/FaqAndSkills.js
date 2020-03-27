import React from "react";
import { v4 as uuid } from "uuid";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  ProgressBar
} from "react-bootstrap";

const DATA_SKILLS = [
  {
    id: uuid(),
    name: "photoshop",
    value: 60
  },
  {
    id: uuid(),
    name: "wordress",
    value: 80
  },
  {
    id: uuid(),
    name: "eCommerce",
    value: 90
  },
  {
    id: uuid(),
    name: "photography",
    value: 50
  }
];

const DATA_FAQ = [
  {
    id: uuid(),
    title: "Eu nostrud officia",
    body:
      "Est laboris enim veniam anim aute eiusmod culpa nulla ad veniam anim voluptate"
  },
  {
    id: uuid(),
    title: "Sint ipsum enim",
    body: "Pariatur ipsum dolore sunt officia enim ipsum eu culpa fugiat dolor"
  },
  {
    id: uuid(),
    title: "Dolore ex ullamco",
    body: "Sunt irure laborum nulla eu irure enim"
  }
];

/**
 * FAQ
 * @param {*} props
 */
export const Faq = props => {
  const faqList = DATA_FAQ.map(faq => (
    <Card className="faq__item" key={faq.id}>
      <Accordion.Toggle as={Card.Header} eventKey={faq.id}>
        {faq.title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={faq.id}>
        <Card.Body>{faq.body}</Card.Body>
      </Accordion.Collapse>
    </Card>
  ));

  return (
    <div className="faq">
      <h2 className="heading__2">faq</h2>
      <Accordion defaultActiveKey="0">{faqList}</Accordion>
    </div>
  );
};

/**
 * SKILLS
 * @param {*} props
 */
export const Skills = props => {
  const skillList = DATA_SKILLS.map(skill => (
    <div className="skills__item" key={skill.id}>
      <h4 className="skills__name">{skill.name}</h4>
      <ProgressBar className="skills__bar" now={skill.value} />
    </div>
  ));

  return (
    <React.Fragment>
      <h2 className="heading__2">skills</h2>
      {skillList}
    </React.Fragment>
  );
};

/**
 * FAQS AND SKILLS
 * @param {*} porps
 */
export default function FaqAndSkills(porps) {
  return (
    <section className="faq-and-skills">
      <Container>
        <Row>
          <Col md={6} className="mb-5 mb-md-0">
            <Faq />
          </Col>
          <Col md={6}>
            <Skills />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
