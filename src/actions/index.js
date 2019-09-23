import axios from "axios";

export const ACTION_START = "ACTION_START";
export const ACTION_SUCCESS = "ACTION_SUCCESS";
export const ACTION_FAIL = "ACTION_FAIL";
export const SYCH_CALL = "SYCH_CALL";

export const getStuff = () => dispatch => {
  dispatch({ type: ACTION_START, payload: "Please Wait" });
  axios
    .get("someapi.io")
    .then(res => {
      //   console.log("RES", res.data);
      dispatch({ type: ACTION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ACTION_FAIL,
        payload: err
      });
    });
};

export const synchCall = stuff => {
  return { type: SYCH_CALL, payload: stuff };
};
