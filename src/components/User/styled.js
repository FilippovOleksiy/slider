import styled from "styled-components";
import cssVariables from "../../common/cssVariables";

const { colors } = cssVariables;

export const Avatar = styled.div`
  height: 180px;
  & > img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: ${colors.turquoise_2};
  }
`;

export const Container = styled.div`
  width: 180px;
  height: 355px;
  margin: 0 40px 0 40px;
  text-align: center;
`;

export const Name = styled.div`
  margin: 10px 0 10px 0;
  color: ${colors.purple};
  font-size: 20px;
  font-weight: bold;
`;

export const Position = styled.div`
  color: ${colors.turquoise_1};
  font-size: 14px;
`;

export const Location = styled.div`
  color: ${colors.gray};
  font-size: 14px;
`;
