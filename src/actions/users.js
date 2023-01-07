import * as api from "../utils/_DATA";

export const GET_USERS = "GET_USERS";

const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const handleGetUsers = () => {
  return (dispatch) => {
    return api._getUsers().then((users) => {
      dispatch(getUsers(users));
    });
  };
};
