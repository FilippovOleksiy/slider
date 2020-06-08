import React from "react";
import PropTypes from "prop-types";

import { Container, UserPosition, UserName } from "./styled";

function SlideContent({ userInfo }) {
  return (
    <Container>
      <UserPosition>{userInfo.position}</UserPosition>
      <UserName>{userInfo.firstName + " " + userInfo.lastName}</UserName>
    </Container>
  );
}

SlideContent.propTypes = {
  userInfo: PropTypes.object,
};

export default SlideContent;
