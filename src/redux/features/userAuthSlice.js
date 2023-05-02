import { createSlice } from "@reduxjs/toolkit";

export const userAuthSlice = createSlice({
  name: "userAuthSlice",
  initialState: {
    token: "",
    tokenVerified: "",
    userData: [],
  },
  reducers: {
    token: (state, action) => {
      state.token = action.payload;
    },
    tokenVerified: (state, action) => {
      state.tokenVerified = action.payload;
    },
    userData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { token, tokenVerified, userData } = userAuthSlice.actions;
