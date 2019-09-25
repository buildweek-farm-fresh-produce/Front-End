import { axiosWithAuth } from "../utils/axiosWithAuth";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SYCH_CALL = "SYCH_CALL";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const FARMER_CHANGE = "FARMER_CHANGE";
export const LOG_OUT = "LOG_OUT";
export const GET_USER = "GET_USER";
export const ERROR_USER = "ERROR_USER";

export const getUserData = state => dispatch => {
  const getUserDataAPI =
    localStorage.getItem("farmer") === "true"
      ? "/api/farmers/"
      : "/api/consumers/";
  axiosWithAuth()
    .get(getUserDataAPI + localStorage.getItem("id"))
    .then(res => {
      // console.log("USERDATA-APP", res.data);
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const login = state => dispatch => {
  dispatch({ type: LOGIN_START });
  // console.log("LOGINCRED", state);
  const loginURL = state.farmer
    ? "/api/auth/farmer/login"
    : "/api/auth/shop/login";
  axiosWithAuth()
    .post(loginURL, state.credentials)
    .then(res => {
      // console.log("LoginRES", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.user.id);
      localStorage.setItem("farmer", state.farmer);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { data: res.data, farmer: state.farmer }
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err
      });
    });
  // localStorage.setItem(
  //   "token",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwMCIsInVzZXJUeXBlIjoiY29uc3VtZXIiLCJpYXQiOjE1NjkzNDYyMDUsImV4cCI6MTU2OTQzMjYwNX0.Q7288qA2pd9oxiGEvBfSwwuwVOO9HDVD_A49a_3ejUE"
  // );
  // dispatch({ type: LOGIN_SUCCESS, payload: "User Logged In" });
};

export const handleChange = e => dispatch => {
  // console.log("HC", e.target.name, e.target.value);
  dispatch({
    type: HANDLE_CHANGE,
    payload: {
      name: e.target.name,
      value: e.target.value
    }
  });
};

export const farmerAC = e => dispatch => {
  // console.log(e.target.value);
  dispatch({
    type: FARMER_CHANGE,
    payload: e.target.value == "true" ? true : false
  });
};

export const logoutAC = () => dispatch => {
  dispatch({
    type: LOG_OUT
  });
};

// export const getStuff = () => dispatch => {
//   dispatch({ type: ACTION_START, payload: "Please Wait" });
//   axios
//     .get("someapi.io")
//     .then(res => {
//       //   console.log("RES", res.data);
//       dispatch({ type: ACTION_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({
//         type: ACTION_FAIL,
//         payload: err
//       });
//     });
// };

// export const synchCall = stuff => {
//   return { type: SYCH_CALL, payload: stuff };
// };
