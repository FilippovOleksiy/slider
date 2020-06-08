import React from "react";
import PropTypes from "prop-types";

import User from "../User";

import { Container } from "./styled";

function UsersList({ usersList, onUserClick }) {
  return (
    <Container>
      {usersList.map((item, iKey) => {
        return (
          <User
            key={iKey}
            userInfo={item}
            onClick={() => {
              onUserClick(iKey);
            }}
          />
        );
      })}
    </Container>
  );
}

UsersList.propTypes = {
  usersList: PropTypes.array,
  onUserClick: PropTypes.func,
};

export default UsersList;
