import { AUTH_STATE } from "./types";
export const setAuthState = (state) => (dispatch) => {
  return dispatch({ type: AUTH_STATE, payload: state });
};
