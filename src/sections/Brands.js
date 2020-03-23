import React, { useState } from "react";
import { Section } from "../components/Section";

/**
 * BRAND LIST
 * @param {*} param0
 */
export const BrandList = ({ items }) => {
  return (
    <div className="brands__list">
      {items.map(brand => (
        <div key={brand.id} className="brands__item">
          <img
            className="brands__item-image"
            src={require(`../assets/images/${brand.img}`)}
            alt={brand.name}
          />
        </div>
      ))}
    </div>
  );
};

/**
 * BRANDS
 */
export default props => {
  const [items] = useState([
    { id: 1, name: "3docean", img: "3docean.jpg" },
    { id: 2, name: "audiojungle", img: "audiojungle.jpg" },
    { id: 3, name: "codecanyon", img: "codecanyon.jpg" },
    { id: 4, name: "photodune", img: "photodune.jpg" },
    { id: 5, name: "themeforest", img: "themeforest.jpg" }
  ]);

  return (
    <Section className="brands">
      <BrandList items={items} />
    </Section>
  );
};
