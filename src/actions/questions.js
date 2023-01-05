import * as api from "../utils/_DATA";
import { handleGetUsers } from "./users";

export const SAVE_QUESTION = "SAVE_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";

const saveQuestion = (question) => {
  return {
    type: SAVE_QUESTION,
    question,
  };
};

const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

export const handleGetQuestions = () => {
  return (dispatch) => {
    return api._getQuestions().then((questions) => {
      dispatch(getQuestions(questions));
    });
  };
};

export const handleQuestionAnswer = (userId, question, optionSelected) => {
  return (dispatch) => {
    return api
      ._saveQuestionAnswer({
        authedUser: userId,
        qid: question.id,
        answer: optionSelected,
      })
      .then((success) => {
        if (success) {
          dispatch(handleGetUsers());
          dispatch(handleGetQuestions());
        }
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  };
};

export const handleSaveQuestion = (question) => {
  return (dispatch) => {
    return api
      ._saveQuestion(question)
      .then((question) => {
        dispatch(saveQuestion(question));
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  };
};
