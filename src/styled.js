import styled from "styled-components";
import cssVariables from "./common/cssVariables";
import backgroundImg from "./assets/bg.png";

const { colors } = cssVariables;

export const Main = styled.div`
  max-width: 1920px;
  margin: auto;
`;

export const Cover = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  height: 100%;
`;

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: url(${backgroundImg});
  z-index: -1;
`;

export const Header = styled.h1`
  color: ${colors.purple};
  text-align: center;
  margin: 0;
  padding: 60px 0 0 0;
`;
