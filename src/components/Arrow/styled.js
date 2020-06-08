import styled from "styled-components";

export const ArrowIcon = styled.div`
  width: 40px;
  height: 40px;
  border-top: solid;
  border-right: solid;
  color: white;
  transform: ${({ direction }) =>
    direction === "left" ? "rotate(-135deg)" : "rotate(45deg)"};
`;

export const ArrowContainer = styled.div`
  display: flex;
  width: 53px;
  height: 100%;
  padding: ${({ direction }) =>
    direction === "left" ? "0 0 0 13px" : "0 13px 0 0"};
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover > div {
    width: 45px;
    height: 45px;
  }
`;
