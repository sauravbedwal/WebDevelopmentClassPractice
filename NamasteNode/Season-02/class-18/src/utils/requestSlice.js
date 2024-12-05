import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      // console.log("state", state);
      //  console.log("action", action);
      return action.payload;
    },
    removeRequest: (state, action) => {
      const newArray = state.filter(
        (request) => request._id !== action.payload
      );
      return newArray;
    },
  },
});

export const { addRequest, removeRequest } = requestSlice.actions;

export default requestSlice.reducer;
