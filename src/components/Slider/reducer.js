export const TRANSLATE_DURATION = 300;

export const SET_ACTIVE_POSITION = "SET_ACTIVE_POSITION";
export const IS_MOUSE_DOWN = "IS_MOUSE_DOWN";
export const SET_DOWN_POSITION = "SET_DOWN_POSITION";
export const SET_SLIDE_WIDTH = "SET_SLIDE_WIDTH";
export const SET_SLIDE_POSITION = "SET_SLIDE_POSITION";
export const SET_ACTIVE_SLIDE = "SET_ACTIVE_SLIDE";
export const SET_SLIDES_LENGTH = "SET_SLIDES_LENGTH";
export const SET_TRANSLATE_DURATION = "SET_TRANSLATE_DURATION";

export const initialState = {
  translateDuration: TRANSLATE_DURATION,
  isMouseDown: false,
  downPosition: 0,
  sliderPosition: 0,
  activePosition: 0,
  slideWidth: 0,
  activeSlide: 0,
  slidesLength: 0,
};

export function reducer(state, { type, payload }) {
  switch (type) {
    case SET_TRANSLATE_DURATION:
      return { ...state, translateDuration: payload };
    case SET_ACTIVE_POSITION:
      return { ...state, activePosition: payload };
    case SET_SLIDES_LENGTH:
      return { ...state, slidesLength: payload };
    case IS_MOUSE_DOWN:
      return { ...state, isMouseDown: payload };
    case SET_DOWN_POSITION:
      return { ...state, downPosition: payload };
    case SET_SLIDE_POSITION:
      const delta = payload - state.sliderPosition;
      if (Math.abs(delta) > state.slideWidth / 2) {
        if (delta < 0) {
          payload = state.sliderPosition - state.slideWidth;
        } else {
          payload = state.sliderPosition + state.slideWidth;
        }
      } else {
        payload = state.sliderPosition;
      }
      return { ...state, sliderPosition: payload, activePosition: payload };
    case SET_SLIDE_WIDTH:
      return {
        ...state,
        slideWidth: payload,
        activePosition: payload * state.activeSlide * -1,
        sliderPosition: payload * state.activeSlide * -1,
      };
    case SET_ACTIVE_SLIDE:
      payload = Math.max(0, payload);
      payload = Math.min(state.slidesLength, payload);
      return {
        ...state,
        activeSlide: payload,
        activePosition: payload * state.slideWidth * -1,
        sliderPosition: payload * state.slideWidth * -1,
      };
    default:
      return state;
  }
}
