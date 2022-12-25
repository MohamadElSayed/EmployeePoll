import * as api from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export const handleReceiveQuestions = () => {
  return (dispatch) => {
    return api._getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
    });
  };
};
