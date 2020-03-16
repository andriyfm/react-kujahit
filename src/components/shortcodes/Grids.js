import React, { Fragment, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const Grids = props => {
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

  const renderRow = columnCount => {
    return (
      <Fragment>
        <h3 className="mt-3">{columnCount} Column</h3>
        <Container>
          <Row className="mt-3">
            {columns.slice(0, columnCount).map((item, i) => (
              <Col key={i} className="bg-navy-dark text-center text-uppercase">
                {item}
              </Col>
            ))}
          </Row>
        </Container>
      </Fragment>
    );
  };

  return (
    <Container>
      <h2>#Rows</h2>
      {renderRow(1)}
      {renderRow(2)}
      {renderRow(3)}
      {renderRow(4)}
    </Container>
  );
};

export default Grids;
