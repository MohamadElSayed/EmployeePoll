import { RECEIVE_QUESTIONS } from "../actions/questions";

export const setQuestions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
};
