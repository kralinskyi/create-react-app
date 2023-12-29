import React from "react";
import "./Section.css";

const Section = ({ children }) => {
  return <section className="container">{children}</section>;
};

export default Section;
