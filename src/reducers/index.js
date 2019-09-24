import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  HANDLE_CHANGE,
  FARMER_CHANGE
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
    id: "",
    shipping_address: "",
    purchase_date: "",
    delivered: "",
    consumer_id: "",
    orders: []
  }
};

export const reducer = (state = initialState, action) => {
  // console.log("ACTION", action);
  switch (action.type) {
    case LOGIN_START:
      // console.log("LOGIN START");
      return { ...state, authLoading: true };
    case LOGIN_SUCCESS:
      console.log("LOGINSUCCESS", action.payload);
      return { ...state, authLoading: false };
    case LOGIN_FAIL:
      console.log("LOGINFAIL", action.payload);
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
    default:
      return state;
  }
};
