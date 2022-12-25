import * as api from "../utils/_DATA";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const AUTHED_USER_LOGOUT = "AUTHED_USER_LOGOUT";

const setAuthedUser = (user) => {
  return {
    type: SET_AUTHED_USER,
    user,
  };
};

export const authedUserLogout = () => {
  return {
    type: AUTHED_USER_LOGOUT,
    user: null,
  };
};

export const handleSetAuthedUser = (username, password) => {
  return (dispatch) => {
    return api
      ._getUser(username, password)
      .then((authedUser) => {
        dispatch(setAuthedUser(authedUser));
      })
      .catch((errorMessage) => {
        dispatch(setAuthedUser({ errorMessage }));
      });
  };
};
