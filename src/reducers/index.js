import { combineReducers } from "redux";
import { setAuthedUser } from "./authedUser";
import { setQuestions } from "./questions";
import { setUsers } from "./users";

export default combineReducers({
  authedUser: setAuthedUser,
  questions: setQuestions,
  users: setUsers,
});
