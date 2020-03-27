import React from "react";
import uuid from "uuid";
import Rating from "./Rating";

const DATA_PRODUCTS = [
  {
    id: uuid(),
    title: "Tuxedo",
    price: 999,
    thumbnail: require("../assets/images/img1.jpg"),
    rating: 4
  },
  {
    id: uuid(),
    title: "Legging",
    price: 120,
    thumbnail: require("../assets/images/img2.jpg"),
    rating: 5
  }
];

/**
 * WIDGET CARD PRODUCTS
 */
export default props => {
  return (
    <section className="widget-card">
      <div className="widget-card__header">
        <h3 className="widget-card__name">{props.name}</h3>
      </div>
      <div className="widget-card__list">
        {DATA_PRODUCTS.map(el => (
          <div className="widget-card__product-item" key={el.id}>
            <img
              className="widget-card__product-item__thumbnail"
              src={el.thumbnail}
              alt="product-thumbnail"
            />
            <div>
              <Rating amount={el.rating} />
              <h4 className="widget-card__product-item__title">{el.title}</h4>
              <h4 className="widget-card__product-item__price">${el.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
