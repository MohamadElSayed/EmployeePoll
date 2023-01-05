import { INITIAL_DATA } from "../actions/shared";
import { GET_USERS } from "../actions/users";

export const setUsers = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case INITIAL_DATA:
      return action.users;
    default:
      return state;
  }
};
