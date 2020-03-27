import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouteMatch, useParams } from "react-router-dom";

/**
 * BREADCRUM ITEM
 * @param {*} param0
 */
export const BreadcumbItem = ({ name = "home", path = "/", active }) => {
  // Breadcrumb active
  const breadcrumbActive = (
    <div className="breadcrumbs__item">
      <span className="breadcrumbs__link active" to={path}>
        {name}
      </span>
    </div>
  );

  if (active) return breadcrumbActive;

  return (
    <div className="breadcrumbs__item">
      <Link className="breadcrumbs__link" to={path}>
        {name}
        <FontAwesomeIcon className="breadcrumbs__icon" icon="chevron-right" />
      </Link>
    </div>
  );
};

/**
 * BREADCRUMBS
 * @param {*} param0
 */
export default props => {
  const { url } = useRouteMatch();
  const { category } = useParams();

  const links = url
    .split("/")
    .filter(el => el !== "")
    .map(el => ({
      name: el,
      path: `/${el}`,
      active: category === el
    }));

  return (
    <nav className="breadcrumbs">
      <BreadcumbItem />
      {links.map((item, i) => (
        <BreadcumbItem
          key={i.toString()}
          name={item.name}
          path={item.path}
          active={item.active}
        />
      ))}
    </nav>
  );
};
