import { combineReducers } from "redux";
import { SET_USERS_LIST, SET_SELECTED_USER } from "./actions.js";

const initState = [{ name: "", lastName: "", position: [""], location: "" }];

function usersList(state = initState, action) {
  switch (action.type) {
    case SET_USERS_LIST:
      return action.payload;
    default:
      return state;
  }
}

function selectedUser(state = -1, action) {
  switch (action.type) {
    case SET_SELECTED_USER:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({ usersList, selectedUser });
