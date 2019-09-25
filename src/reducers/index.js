import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  HANDLE_CHANGE,
  FARMER_CHANGE,
  LOG_OUT
} from "../actions";
// import { combineReducers } from "redux";
// import { connectRouter } from "connected-react-router";

// export const createRootReducer = history =>
//   combineReducers({
//     router: connectRouter(history),
//     reducer
//   });

const initialState = {
  authLoading: false,
  farmer: false,
  credentials: {
    username: "",
    password: ""
  },
  register: {
    username: "",
    password: ""
  },
  consumer: {
    city_id: "",
    email: "",
    id: "",
    state_id: "",
    username: ""
  }
};

export const reducer = (state = initialState, action) => {
  // console.log("ACTION", action);
  switch (action.type) {
    case LOGIN_START:
      // console.log("LOGIN START");
      return { ...state, authLoading: true };
    case LOGIN_SUCCESS:
      // console.log("LOGINSUCCESS", action.payload);
      return {
        ...state,
        authLoading: false,
        consumer_id: action.payload.user.id,
        credentials: { username: "", password: "" },
        consumer: {
          city_id: action.payload.user.city_id,
          email: action.payload.user.email,
          id: action.payload.user.id,
          state_id: action.payload.user.state_id,
          username: action.payload.user.username
        }
      };
    case LOGIN_FAIL:
      // console.log("LOGINFAIL", action.payload);
      return state;
    case HANDLE_CHANGE:
      // console.log("REDUCECRED", state.credentials, action.payload);
      return {
        ...state,
        credentials: {
          ...state.credentials,
          [action.payload.name]: action.payload.value
        }
      };
    case FARMER_CHANGE:
      return {
        ...state,
        farmer: action.payload
      };
    case LOG_OUT:
      return {
        ...state,
        consumer: {
          city_id: "",
          email: "",
          id: "",
          state_id: "",
          username: ""
        }
      };
    default:
      return state;
  }
};
