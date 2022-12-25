import { SET_AUTHED_USER } from "../actions/authedUser";
import { AUTHED_USER_LOGOUT } from "../actions/authedUser";

export const setAuthedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.user;
    case AUTHED_USER_LOGOUT:
      return null;
    default:
      return state;
  }
};
