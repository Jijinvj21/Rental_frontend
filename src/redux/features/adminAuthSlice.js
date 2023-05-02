import { createSlice } from "@reduxjs/toolkit";

export const adminAuthSlice = createSlice({
  name: "adminAuthSlice",
  initialState: {
    token: "",
    tokenVerified: "",
  },
  reducers: {
    token: (state, action) => {
      state.token = action.payload;
    },
    tokenVerified: (state, action) => {
      state.tokenVerified = action.payload;
    },
  },
});

export const { token, tokenVerified } = adminAuthSlice.actions;
