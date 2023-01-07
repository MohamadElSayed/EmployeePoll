import { INITIAL_DATA } from "../actions/shared";
import { GET_QUESTIONS, GET_QUESTION } from "../actions/questions";

export const setQuestions = (state = {}, action) => {
  let newstate = Object.assign({}, state);
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;
    case GET_QUESTION:
      newstate[action.question.id] = action.question;
      return newstate;
    case INITIAL_DATA:
      return action.questions;
    default:
      return state;
  }
};
