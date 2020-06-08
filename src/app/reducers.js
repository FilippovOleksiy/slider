import { combineReducers } from "redux";
import {
  SET_USERS_LIST,
  SET_SELECTED_USER,
  SLIDER_VISIBLE,
} from "./actions.js";

const initState = [
  { firstName: "", lastName: "", position: [""], location: "" },
];

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

function sliderVisible(state = false, action) {
  switch (action.type) {
    case SLIDER_VISIBLE:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({ usersList, selectedUser, sliderVisible });
