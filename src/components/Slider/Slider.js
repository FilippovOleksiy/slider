import React from "react";
import PropTypes from "prop-types";

import Arrow from "../Arrow";
import { Container, ArrowContainer, SlidesContainer } from "./styled";

function generateItems(n, template) {
  const res = [];
  let i = 0;
  while (i < n) {
    res.push(template(i));
    i++;
  }
  return res;
}

function slide(key) {
  return (
    <div
      key={key}
      style={{ display: "inline-block", width: "100px", height: "100px" }}
    >
      Hello
    </div>
  );
}

function Slider({ selectedUser }) {
  return (
    <Container>
      <ArrowContainer style={{ left: "0px" }}>
        <Arrow direction="left" />
      </ArrowContainer>
      <SlidesContainer>{generateItems(100, slide)}</SlidesContainer>
      <ArrowContainer style={{ right: "0px" }}>
        <Arrow direction="right" />
      </ArrowContainer>
    </Container>
  );
}

Slider.propTypes = {
  selectedUser: PropTypes.number,
};

export default Slider;
