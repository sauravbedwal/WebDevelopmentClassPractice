import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: (state, action) => {
      const feedArray = state.filter((user) => user._id !== action.payload);
      return feedArray;
    },
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;

export default feedSlice.reducer;
