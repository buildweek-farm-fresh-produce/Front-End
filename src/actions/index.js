import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SYCH_CALL = "SYCH_CALL";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const FARMER_CHANGE = "FARMER_CHANGE";

export const login = state => dispatch => {
  dispatch({ type: LOGIN_START, payload: "Please Wait" });
  state.authLoading(true);
  axiosWithAuth()
    .post("/https://farm-fresh-bw.herokuapp.com/shop/login", state.credentials)
    .then(res => {
      //   console.log("RES", res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err
      });
    });
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
