import React, { Fragment, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const Rows = props => {
  const [columns] = useState([
    "col-1",
    "col-2",
    "col-3",
    "col-4",
    "col-5",
    "col-6",
    "col-7",
    "col-8",
    "col-9",
    "col-10",
    "col-11",
    "col-12"
  ]);
  const [rows] = useState([1, 2, 3, 4, 8]);

  const renderRows = rows.map(row => (
    <Fragment>
      <h3 className="mt-3">{row} Column</h3>
      <Container>
        <Row className="mt-3">
          {columns.slice(0, row).map(item => (
            <Col className="bg-navy-dark text-center text-uppercase">
              {item}
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  ));

  return (
    <Container>
      <h2>#Rows</h2>
      {renderRows}
    </Container>
  );
};

export default Rows;
