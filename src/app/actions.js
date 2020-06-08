export const SET_USERS_LIST = "SET_USERS_LIST";
export const SET_SELECTED_USER = "SET_SELECTED_USER";
export const SLIDER_VISIBLE = "SLIDER_VISIBLE";

export function setUsersList(payload) {
  return { type: SET_USERS_LIST, payload };
}

export function setSelectedUser(payload) {
  return { type: SET_SELECTED_USER, payload };
}

export function setSliderVisible(payload) {
  return { type: SLIDER_VISIBLE, payload };
}
