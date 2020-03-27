import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const DEFAULT_PAGES = [
  {
    id: "1",
    name: "home",
    path: "/home"
  },
  {
    id: "2",
    name: "about",
    path: "/about"
  },
  {
    id: "3",
    name: "woman",
    path: "/products/woman"
  },
  {
    id: "4",
    name: "men",
    path: "/men"
  },
  {
    id: "5",
    name: "accessories",
    path: "/accessories"
  },
  {
    id: "6",
    name: "blog",
    path: "/blog"
  },
  {
    id: "7",
    name: "contact",
    path: "/contact"
  },
  {
    id: "8",
    name: "pages",
    path: "/pages"
  }
];

/**
 * HEADER BOTTOM
 * @param {*} props
 */
export default function HeaderMid(props) {
  const [pages] = React.useState(DEFAULT_PAGES);
  return (
    <div className="header__bottom d-none d-md-block">
      <Container>
        <nav className="header__bottom-navbar">
          {pages.map(page => (
            <Link
              className="header__bottom-navbar_item"
              to={page.path}
              key={page.id}
            >
              {page.name}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}
