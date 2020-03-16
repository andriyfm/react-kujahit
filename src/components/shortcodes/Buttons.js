import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const Buttons = () => {
  const [variants] = useState([
    "primary",
    "secondary",
    "warning",
    "danger",
    "info",
    "success",
    "salmon",
    "light",
    "dark",
    "navy-dark",
    "light-color",
    "light-color-2",
    "light-color-3"
  ]);

  const renderVariants = variants.map((name, index) => (
    <Button key={index} className="mr-1 my-1" variant={name}>
      {name}
    </Button>
  ));

  return (
    <Container className="my-30">
      <h2 className="display-4">#Buttons</h2>
      <Row>
        <Col>{renderVariants}</Col>
      </Row>
    </Container>
  );
};

export default Buttons;
