import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 1;
  background-color: #254f58;
  visibility: ${({ visibility }) => visibility};
`;

export const SliderContainer = styled.div`
  width: 90%;
  height: 50%;
  margin-top: 50%;
  margin-left: auto;
  margin-right: auto;
`;
