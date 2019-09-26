import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  HANDLE_CHANGE,
  FARMER_CHANGE,
  LOG_OUT,
  GET_USER,
  ERROR_USER,
  GET_FARM
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
  user: {
    city_id: "",
    email: "",
    id: "",
    state_id: "",
    username: ""
  },
  isFarmer: false,
  cart: [],
  localFarms: []
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
        isFarmer: action.payload.farmer,
        authLoading: false,
        credentials: { username: "", password: "" },
        user: {
          city_id: action.payload.data.user.city_id,
          email: action.payload.data.user.email,
          id: action.payload.data.user.id,
          state_id: action.payload.data.user.state_id,
          username: action.payload.data.user.username
        }
      };
    case LOGIN_FAIL:
      // console.log("LOGINFAIL", action.payload);
      return { ...state, authLoading: false };
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
        user: {
          city_id: "",
          email: "",
          id: "",
          state_id: "",
          username: ""
        }
      };
    case GET_USER:
      // console.log("GOTUSER", action.payload);

      return {
        ...state,
        user: {
          city_id: state.isFarmer ? action.payload.city_id : "",
          email: action.payload.email,
          id: action.payload.id,
          state_id: action.payload.state_id,
          username: action.payload.username
        }
      };
    case ERROR_USER:
      // console.log("GOTUSER-ERROR");
      return state;
    case GET_FARM:
      // console.log("GOTFARMS", action.payload);
      return {
        ...state,
        localFarms: action.payload
      };
    default:
      return state;
  }
};
