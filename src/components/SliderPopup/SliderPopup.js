import React from "react";
import PropTypes from "prop-types";

import Slider from "../Slider";
import CloseIcon from "../Close";
import SlideContent from "../SlideContent";
import { Container, SliderContainer } from "./styled";

function SliderPopup({ selectedUser, usersList, sliderVisible, sliderHide }) {
  return (
    <React.Fragment>
      {sliderVisible && (
        <Container>
          <CloseIcon
            onClick={sliderHide}
            style={{ right: "10px", top: "10px" }}
          />
          <SliderContainer>
            <Slider
              activeSlide={selectedUser + 1}
              slides={usersList.map((userInfo, key) => (
                <SlideContent key={key} userInfo={userInfo}></SlideContent>
              ))}
            />
          </SliderContainer>
        </Container>
      )}
    </React.Fragment>
  );
}

SliderPopup.propTypes = {
  selectedUser: PropTypes.number,
  usersList: PropTypes.array,
  sliderVisible: PropTypes.bool,
  sliderHide: PropTypes.func,
};

export default SliderPopup;
