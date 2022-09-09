import { authTypes } from "../types/auth.types";
const { SIGN_IN, SIGN_OUT, SIGN_UP } = authTypes;
import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../../constants/firebase";

export const singUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      });
      const data = await response.json();
      console.warn(data);
      dispatch({ type: SIGN_UP, token: data.idToken, userId: data.localId });
    } catch (error) {
      console.log(error);
    }
  };
};

export const singIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      });
      const data = await response.json();
      console.warn(data);
      dispatch({ type: SIGN_IN, token: data.idToken, userId: data.localId });
    } catch (error) {
      console.log(error);
    }
  };
};
