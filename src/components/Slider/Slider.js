import React, { useRef, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

import { useResizeListener } from "../../hooks";
import {
  reducer,
  initialState,
  SET_SLIDE_WIDTH,
  SET_SLIDES_LENGTH,
  SET_ACTIVE_SLIDE,
  SET_TRANSLATE_DURATION,
  SET_DOWN_POSITION,
  IS_MOUSE_DOWN,
  TRANSLATE_DURATION,
  SET_SLIDE_POSITION,
  SET_ACTIVE_POSITION,
} from "./reducer";
import Arrow from "../Arrow";
import {
  Container,
  ArrowContainer,
  SlidesContainer,
  Overflow,
  SlideContainer,
} from "./styled";

const debounce = (time) => (callback) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, time);
  };
};

function Slider({ activeSlide = 0, slides }) {
  const containerRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  useResizeListener(
    debounce(500)(() =>
      dispatch({
        type: SET_SLIDE_WIDTH,
        payload: containerRef.current.offsetWidth,
      })
    )
  );

  useEffect(() => {
    dispatch({
      type: SET_SLIDES_LENGTH,
      payload: slides.length - 1,
    });
  }, [slides]);

  useEffect(() => {
    dispatch({ type: SET_ACTIVE_SLIDE, payload: activeSlide - 1 });
  }, [activeSlide]);

  useEffect(() => {
    dispatch({
      type: SET_SLIDE_WIDTH,
      payload: containerRef.current.offsetWidth,
    });
  }, []);

  function onMouseDownHandler(event) {
    dispatch({ type: SET_TRANSLATE_DURATION, payload: 0 });
    dispatch({ type: SET_DOWN_POSITION, payload: event.clientX });
    dispatch({ type: IS_MOUSE_DOWN, payload: true });
  }
  function onMouseUpHandler() {
    dispatch({ type: SET_TRANSLATE_DURATION, payload: TRANSLATE_DURATION });
    dispatch({ type: SET_SLIDE_POSITION, payload: state.activePosition });
    dispatch({ type: IS_MOUSE_DOWN, payload: false });
  }
  function onMouseMoveHandler(event) {
    dispatch({
      type: SET_ACTIVE_POSITION,
      payload: state.sliderPosition + event.clientX - state.downPosition,
    });
  }
  function nextSlide() {
    dispatch({ type: SET_ACTIVE_SLIDE, payload: state.activeSlide + 1 });
  }
  function prevSlide() {
    dispatch({ type: SET_ACTIVE_SLIDE, payload: state.activeSlide - 1 });
  }

  return (
    <Container
      onMouseDown={onMouseDownHandler}
      onMouseUp={onMouseUpHandler}
      onMouseMove={(event) => {
        state.isMouseDown && onMouseMoveHandler(event);
      }}
      ref={containerRef}
    >
      {state.activeSlide > 1 && (
        <ArrowContainer onClick={prevSlide} style={{ left: "0px" }}>
          <Arrow direction="left" />
        </ArrowContainer>
      )}
      <Overflow>
        <SlidesContainer
          position={state.activePosition}
          duration={state.translateDuration}
        >
          {slides.map((val, key) => (
            <SlideContainer key={key}>{val}</SlideContainer>
          ))}
        </SlidesContainer>
      </Overflow>
      {state.activeSlide < state.slidesLength && (
        <ArrowContainer onClick={nextSlide} style={{ right: "0px" }}>
          <Arrow direction="right" />
        </ArrowContainer>
      )}
    </Container>
  );
}

Slider.propTypes = {
  activeSlide: PropTypes.number,
  slides: PropTypes.array,
};

export default Slider;
