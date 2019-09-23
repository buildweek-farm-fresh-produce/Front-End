import { ACTION_START, ACTION_SUCCESS, ACTION_FAIL } from "../actions";

const initialState = { someState: "" };

export const reducer = (state = initialState, action) => {
  console.log("ACTION", action.type);
  switch (action.type) {
    default:
      return state;
  }
};
