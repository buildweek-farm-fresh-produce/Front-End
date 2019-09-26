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
export const GET_FARM = "GET_FARM";
export const ERROR_FARM = "ERROR_FARM";
export const GET_PRODUCE = "GET_PRODUCE";
export const ERROR_PRODUCE = "ERROR_PRODUCE";
export const ADD_TO_CART = "ADD_TO_CART";
export const HANDLE_QUANTITY = "HANDLE_QUANTITY";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

export const deleteCartItem = i => dispatch => {
  // console.log("Delete", i);
  dispatch({
    type: DELETE_CART_ITEM,
    payload: i
  });
};

export const handleQuantity = e => dispatch => {
  // console.log("Quantity", e.target.name);
  dispatch({
    type: HANDLE_QUANTITY,
    payload: e.target
  });
};

const categoryTable = {};
const categoryLookup = lookup => {};
export const addToCart = i => dispatch => {
  console.log("CARTADD", i);
  let itemToAdd = {};
  if (i.name !== undefined) {
    itemToAdd.produce_name = i.name;
    itemToAdd.quantity = i.quantity;
    itemToAdd.unit_price = i.price;
    itemToAdd.seller = i.farm_name;
  } else {
    itemToAdd = i;
    delete itemToAdd.city_name;
    delete itemToAdd.produce_category;
    delete itemToAdd.city_id;
  }
  dispatch({
    type: ADD_TO_CART,
    payload: itemToAdd
  });
};

export const getProduce = state => dispatch => {
  axiosWithAuth()
    .get("/api/consumers/shop/2")
    .then(res => {
      // console.log("PRODUCEDATA", res.data);
      dispatch({
        type: GET_PRODUCE,
        payload: res.data
      });
      return true;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};

export const getFarms = state => dispatch => {
  axiosWithAuth()
    .get("/api/consumers/farms/2/2")
    .then(res => {
      // console.log("FARMDATA-APP", res.data);
      dispatch({
        type: GET_FARM,
        payload: res.data
      });
      return true;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};

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
      return true;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};

export const login = state => dispatch => {
  dispatch({ type: LOGIN_START });
  // console.log("LOGINCRED", state);
  const loginURL = state.farmer
    ? "/api/auth/farmer/login"
    : "/api/auth/shop/login";
  return axiosWithAuth()
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
      return true;
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err
      });
      return false;
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
