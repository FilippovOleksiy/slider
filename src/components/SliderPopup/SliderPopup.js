import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Slider from "../Slider";
import CloseIcon from "../Close";
import { Container, SliderContainer } from "./styled";

function SliderPopup({ selectedUser }) {
  const [visibility, updateVisibility] = useState("visible");
  useEffect(() => {
    if (selectedUser > -1) {
      updateVisibility("visible");
    }
  }, [selectedUser]);

  const hideSlider = () => updateVisibility("hidden");

  return (
    <Container visibility={visibility}>
      <CloseIcon onClick={hideSlider} style={{ right: "10px", top: "10px" }} />
      <SliderContainer>
        <Slider selectedUser={selectedUser} />
      </SliderContainer>
    </Container>
  );
}

SliderPopup.propTypes = {
  selectedUser: PropTypes.number,
};

export default SliderPopup;
