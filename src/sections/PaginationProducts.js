import React from "react";
import _ from "lodash";
import { Pagination } from "react-bootstrap";

/**
 * PAGINATION PRODUCTS
 * @param {*} props
 */
export default props => {
  let active = 2;
  let items = _.range(1, 5).map(number => {
    return (
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  });

  return <Pagination className="pagination-products">{items}</Pagination>;
};
