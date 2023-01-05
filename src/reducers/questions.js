import { INITIAL_DATA } from "../actions/shared";
import { GET_QUESTIONS, SAVE_QUESTION } from "../actions/questions";

export const setQuestions = (state = {}, action) => {
  let newstate = Object.assign({}, state);
  switch (action.type) {
    // case SAVE_QUESTIONANSWER:
    //   newstate[action.question.id] = action.question;
    //   return newstate;
    case GET_QUESTIONS:
      return action.questions;
    case SAVE_QUESTION:
      newstate[action.question.id] = action.question;
      return newstate;
    case INITIAL_DATA:
      return action.questions;
    default:
      return state;
  }
};
