import React, { useState } from "react";

export const BrandList = ({ items }) => {
  return items.map(brand => (
    <div className="brands__list">
      <div key={brand.id} className="brands__item">
        <img
          src={require(`../assets/images/${brand.img}`)}
          alt={brand.name}
          className="brands__item-image"
        />
      </div>
    </div>
  ));
};

export default props => {
  const [brands] = useState([
    { id: 1, name: "3docean", img: "3docean.jpg" },
    { id: 2, name: "audiojungle", img: "audiojungle.jpg" },
    { id: 3, name: "codecanyon", img: "codecanyon.jpg" },
    { id: 4, name: "photodune", img: "photodune.jpg" },
    { id: 5, name: "themeforest", img: "themeforest.jpg" }
  ]);

  return (
    <section className="brands">
      <div className="brands__list">
        {brands.map(brand => (
          <div key={brand.id} className="brands__item">
            <img
              src={require(`../assets/images/${brand.img}`)}
              alt={brand.name}
              className="brands__item-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
