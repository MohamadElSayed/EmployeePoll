import { AUTHED_USER_LOGOUT } from "../actions/authedUser";
import { INITIAL_DATA } from "../actions/shared";
import { SET_AUTHED_USER } from "../actions/authedUser";
import { GET_USERS } from "../actions/users";

export const setAuthedUser = (state = null, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users[state.id];
    case SET_AUTHED_USER:
      return action.user;
    case AUTHED_USER_LOGOUT:
      return null;
    case INITIAL_DATA:
      return action.authuser;
    default:
      return state;
  }
};
