import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SYCH_CALL = "SYCH_CALL";
export const HANDLE_CHANGE = "HANDLE_CHANGE";

export const login = state => dispatch => {
  dispatch({ type: LOGIN_START, payload: "Please Wait" });
  // state.authLoading(true);
  // axiosWithAuth()
  //   .post("/login", state.credentials)
  //   .then(res => {
  //     //   console.log("RES", res.data);
  //     dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  //   })
  //   .catch(err => {
  //     dispatch({
  //       type: LOGIN_FAIL,
  //       payload: err
  //     });
  //   });
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

export const synchCall = stuff => {
  return { type: SYCH_CALL, payload: stuff };
};

export const handleChange = e => dispatch => {
  console.log("HC", e.target.name, e.target.value);
  dispatch({
    type: HANDLE_CHANGE,
    payload: {
      [e.target.name]: e.target.value
    }
  });
};
