import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

const DEFAULT_PAGES = [
  {
    id: "1",
    name: "home"
  },
  {
    id: "2",
    name: "about"
  },
  {
    id: "3",
    name: "woman"
  },
  {
    id: "4",
    name: "men"
  },
  {
    id: "5",
    name: "accessories"
  },
  {
    id: "6",
    name: "blog"
  },
  {
    id: "7",
    name: "contact"
  },
  {
    id: "8",
    name: "pages"
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
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a className="header__bottom-navbar_item" href="#" key={page.id}>
              {page.name}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}
