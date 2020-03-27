import React from "react";
import { Container } from "react-bootstrap";

/**
 * SECTION HEADER
 * @param {*} param0
 */
export const SectionHeader = ({ title, description, headeralign = "left" }) => {
  const alignment = `text-${headeralign}`;

  return (
    <div className={`section__header ${alignment}`}>
      <Container>
        <h2 className="section__title">{title}</h2>
        <p className="section__description">{description}</p>
      </Container>
    </div>
  );
};

/**
 * SECTION
 * @param {*} props
 */
export const Section = props => {
  const showSeactionHeader = props.title || props.description;

  return (
    <section {...props}>
      {showSeactionHeader && (
        <SectionHeader
          title={props.title}
          description={props.description}
          headeralign={props.headeralign}
        />
      )}
      <div className="section__body">{props.children}</div>
    </section>
  );
};
