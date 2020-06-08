import styled from "styled-components";
import backgroundImg from "../../assets/slider-bg.jpg";

export const Container = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  align-items: center;
  background: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  z-index: 1;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 50%;
`;
