import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  authData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoggedIn: (
      state,
      action: PayloadAction<{
        token: string;
        authData: any;
      }>
    ) => {
      state.token = action.payload.token;
      state.authData = action.payload.authData;
    },
    employeeRegistration: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    employeeLoggedIn: (
      state,
      action: PayloadAction<{ token: string; authData: any }>
    ) => {
      state.token = action.payload.token;
      state.authData = action.payload.authData;
    },
    userRegistration: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    userLoggedIn: (
      state,
      action: PayloadAction<{
        token: string;
        user: any;
      }>
    ) => {
      state.token = action.payload.token;
      state.authData = action.payload.user;
    },
    LoggedOut: (state) => {
      state.token = "";
      state.authData = {};
    },
  },
});

export const {
  employeeRegistration,
  employeeLoggedIn,
  userRegistration,
  userLoggedIn,
  LoggedOut,
  LoggedIn,
} = authSlice.actions;

export default authSlice.reducer;
