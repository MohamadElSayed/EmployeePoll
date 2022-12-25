import { combineReducers } from "redux";
import { setAuthedUser } from "./authedUser";
import { setQuestions } from "./questions";

export default combineReducers({
  authedUser: setAuthedUser,
  questions: setQuestions,
});
