import * as api from "../utils/_DATA";

export const INITIAL_DATA = "INITIAL_DATA";

export const initialData = (authuser, questions, users) => {
  return {
    type: INITIAL_DATA,
    authuser,
    questions,
    users,
  };
};

export const handleInitialData = (authuser) => {
  return (dispatch) => {
    return api._getInitialData().then(({ questions, users }) => {
      dispatch(initialData(authuser, questions, users));
    });
  };
};
