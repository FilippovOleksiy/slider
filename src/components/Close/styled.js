import styled from "styled-components";

export const CloseIcon = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  transform: rotate(45deg);

  &:hover {
    transform: rotate(405deg) scale(1.2);
    transition: transform 0.5s;
  }

  & div:nth-child(1) {
    width: 50%;
    height: 48%;
    border-right: solid;
    border-bottom: solid;
    border-color: white;
  }
  & div:nth-child(2) {
    width: 44%;
    height: 45%;
    margin-left: 50%;
    border-left: solid;
    border-top: solid;
    position: absolute;
    top: 48%;
    border-color: white;
  }
`;
