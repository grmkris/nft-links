import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  session: {},
};

const authSlice = createSlice({
  name: "authentication",
  initialState: () => authInitialState,
  reducers: {
    logIn(state, action) {
      state.session = action.payload;
    },
    logOut(state) {
      state.session = {};
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
