import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

const init = {
  isLoggedIn: false,
  user: null,
  token: null,
  mode: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    userLogin: (state, { payload }) => {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      localStorage.clear();
      redirect("/auth/login");
    },
    setMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { userLogin, userLogout, setMode } = authSlice.actions;
export default authSlice.reducer;
