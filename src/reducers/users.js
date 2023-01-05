import { INITIAL_DATA } from "../actions/shared";
// import { SAVE_QUESTIONANSWER } from "../actions/questions";
import { GET_USERS } from "../actions/users";

export const setUsers = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    // case SAVE_QUESTIONANSWER:
    //   let newstate = Object.assign({}, state);
    //   newstate[action.user.id] = action.user;
    //   return newstate;
    case INITIAL_DATA:
      return action.users;
    default:
      return state;
  }
};
