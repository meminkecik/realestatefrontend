// registerSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistering: false,
  registerError: null,
  registeredUser: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    startRegister: (state) => {
      state.isRegistering = true;
      state.registerError = null;
      state.registeredUser = null;
    },
    registerSuccess: (state, action) => {
      state.isRegistering = false;
      state.registeredUser = action.payload;
    },
    registerFailure: (state, action) => {
      state.isRegistering = false;
      state.registerError = action.payload;
    },
  },
});

export const { startRegister, registerSuccess, registerFailure } = registerSlice.actions;
export default registerSlice.reducer;
