import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  HANDLE_CHANGE
} from "../actions";

const initialState = {
  authLoading: false,
  credentials: {
    username: "",
    password: ""
  }
};

export const reducer = (state = initialState, action) => {
  console.log("ACTION", action.type);
  switch (action.type) {
    case LOGIN_START:
      return state;
    case LOGIN_SUCCESS:
      return state;
    case LOGIN_FAIL:
      return state;
    case HANDLE_CHANGE:
      return state;
    default:
      return state;
  }
};
