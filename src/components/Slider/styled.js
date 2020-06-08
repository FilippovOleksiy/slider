import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
`;

export const ArrowContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: 1;
`;

export const Overflow = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export const SlidesContainer = styled.div.attrs(
  ({ position, duration = 0 }) => ({
    style: {
      transform: `translateX(${position}px)`,
      transitionDuration: `${duration}ms`,
    },
  })
)`
  display: flex;
  height: 100%;
  transition-property: transform;
`;

export const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
