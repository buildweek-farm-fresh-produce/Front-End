import { axiosWithAuth } from "../utils/axiosWithAuth";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SYCH_CALL = "SYCH_CALL";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const FARMER_CHANGE = "FARMER_CHANGE";

export const login = state => dispatch => {
  dispatch({ type: LOGIN_START });
  // axiosWithAuth()
  //   .post("/login", state.credentials)
  //   .then(res => {
  //     // console.log("LoginRES", res.data);

  //     dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  //   })
  //   .catch(err => {
  //     dispatch({
  //       type: LOGIN_FAIL,
  //       payload: err
  //     });
  //   });
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwMCIsInVzZXJUeXBlIjoiY29uc3VtZXIiLCJpYXQiOjE1NjkzNDYyMDUsImV4cCI6MTU2OTQzMjYwNX0.Q7288qA2pd9oxiGEvBfSwwuwVOO9HDVD_A49a_3ejUE"
  );
  dispatch({ type: LOGIN_SUCCESS, payload: "HI" });
};

export const handleChange = e => dispatch => {
  // console.log("HC", e.target.name, e.target.value);
  dispatch({
    type: HANDLE_CHANGE,
    payload: {
      [e.target.name]: e.target.value
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
