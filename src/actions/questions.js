import * as api from "../utils/_DATA";
import { handleGetUsers } from "./users";

export const GET_QUESTION = "GET_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";

const getQuestion = (question) => {
  return {
    type: GET_QUESTION,
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
        dispatch(getQuestion(question));
        dispatch(handleGetUsers());
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  };
};
