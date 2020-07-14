const { UTILS } = require("../constants/UTILS");

const INITIAL_STATE = {
  auth_state: UTILS.AUTH_STATE.NOT_LOGGED_IN,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case UTILS.AUTH_STATE.LOG_IN: {
      return { ...state, auth_state: UTILS.AUTH_STATE.LOGGED_IN };
    }
    case UTILS.AUTH_STATE.LOG_OUT: {
      return { ...state, auth_state: UTILS.AUTH_STATE.NOT_LOGGED_IN };
    }
    default:
      return state;
  }
};
export default auth;
