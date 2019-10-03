import {
  LOADING,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  REGISTER,
  REGISTER_FAILED
} from "./types";
import { API_URI } from "./../../config";

export const loading = () => ({
  type: LOADING
});

export const login = (email, password) => async dispatch => {
  console.log("action called login", email, password);
  dispatch(loading());
  fetch(API_URI + "auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(result => result.json())
    .then(result => {
      console.log("token", result);
    });
};

export const register = user => async dispatch => {
  dispatch(loading());
  fetch(API_URI + "auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(result => result.json())
    .then(result => {
      console.log("user registration successfull", result);
    });
};
