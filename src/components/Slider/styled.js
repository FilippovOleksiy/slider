import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const ArrowContainer = styled.div`
    top: 0px;
  position: absolute;
  height: 100%;
`;

export const SlidesContainer = styled.div`
  white-space: nowrap;
  background-color: yellow;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
