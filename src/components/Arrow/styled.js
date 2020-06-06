import styled from "styled-components";

export const ArrowIcon = styled.div`
  width: 50px;
  height: 50px;
  border-top: solid;
  border-right: solid;
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
  overflow: hidden;
`;
