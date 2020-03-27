import React from "react";
import { Button } from "react-bootstrap";
import uuid from "uuid";

import Rating from "../components/Rating";
import PaginationProducts from "../sections/PaginationProducts";

const DATA_PRODUCTS = [
  {
    id: uuid(),
    name: "Voluptate sit qui",
    description:
      "Ad in reprehenderit reprehenderit reprehenderit qui ex Lorem velit duis dolore Lorem Lorem Lorem",
    thumbnail: require("../assets/images/img1.jpg"),
    rating: 5,
    price: 999
  },
  {
    id: uuid(),
    name: "Ea esse sit laboris duis ut",
    description:
      "Ad in reprehenderit reprehenderit reprehenderit qui ex Lorem velit duis dolore Lorem Lorem Lorem",
    thumbnail: require("../assets/images/img1.jpg"),
    rating: 3,
    price: 999
  },
  {
    id: uuid(),
    name: "Anim cupidatat aute dolore quis",
    description:
      "Ad in reprehenderit reprehenderit reprehenderit qui ex Lorem velit duis dolore Lorem Lorem Lorem",
    thumbnail: require("../assets/images/img1.jpg"),
    rating: 4,
    price: 999
  },
  {
    id: uuid(),
    name: "Anim cupidatat aute dolore quis",
    description:
      "Ad in reprehenderit reprehenderit reprehenderit qui ex Lorem velit duis dolore Lorem Lorem Lorem",
    thumbnail: require("../assets/images/img1.jpg"),
    rating: 4,
    price: 999
  }
];

/**
 * PRODUCT LIST
 * @param {*} props
 */
export default props => {
  const wrapText = text => {
    return text.length >= 90 ? `${text.slice(0, 70)}...` : text;
  };

  const addToCart = item => {
    console.log("addToCart", item);
  };

  const renderItems = DATA_PRODUCTS.map(item => {
    return (
      <div className="product-list__item" key={item.id}>
        <div className="product-list__item-header">
          <img
            className="product-list__item-thumbnail"
            src={item.thumbnail}
            alt="product-thumbnail"
          />
          <div className="product-list__item-price">${item.price}</div>
        </div>
        <div className="product-list__item-body">
          <div className="product-list__item-info">
            <div className="product-list__item-name">{item.name}</div>
            <Rating size="xs" amount={item.rating} />
          </div>
          <div className="product-list__item-desc">
            {wrapText(item.description)}
          </div>
        </div>
        <div className="product-list__item-footer">
          <Button
            className="product-list__item-cartbtn"
            variant="dark"
            onClick={e => addToCart(item)}
          >
            add to cart
          </Button>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <section className="product-list">{renderItems}</section>
      <PaginationProducts />
    </React.Fragment>
  );
};
