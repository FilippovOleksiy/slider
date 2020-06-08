import React from "react";
import PropTypes from "prop-types";

import { useNewImage } from "../../hooks";
import { Container, Name, Avatar, Position, Location } from "./styled";

function User({ userInfo, onClick }) {
  let imgSrc = useNewImage();

  return (
    <Container onClick={onClick}>
      <Avatar>
        {imgSrc && (
          <img
            src={imgSrc}
            alt={userInfo.firstName + " " + userInfo.lastName}
          />
        )}
      </Avatar>
      <Name>{userInfo.firstName + " " + userInfo.lastName}</Name>

      <Position>{userInfo.position}</Position>
      <Location>{userInfo.location}</Location>
    </Container>
  );
}

User.propTypes = {
  userInfo: PropTypes.object,
  onClick: PropTypes.func,
};

export default User;
