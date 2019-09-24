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
  },
  register: {
    username: "",
    password: ""
  }
};

export const reducer = (state = initialState, action) => {
  console.log("ACTION", action);
  switch (action.type) {
    case LOGIN_START:
      console.log("LOGIN START");
      return state;
    case LOGIN_SUCCESS:
      return state;
    case LOGIN_FAIL:
      return state;
    case HANDLE_CHANGE:
      console.log("CHANGE", action);
      return {
        ...state,
        credentials: { [action.payload.name]: action.payload.value }
      };
    default:
      return state;
  }
};
