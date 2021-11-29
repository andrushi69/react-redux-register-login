import authOperations from "./AuthorizeOperations"
import {createSlice} from "@reduxjs/toolkit";
import Error from "../../components/Error/Error";
import {toast, ToastContainer} from "react-toastify";
import React from "react";

const initialState = {
  user: {name: null, email: null},
  token: null,
  isLoggedIn: false,
  isFetchingCurrUser: false
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.userRegister.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.userLogIn.fulfilled](state, action) {
      state.user = action?.payload?.user;
      state.token = action?.payload?.token;
      state.isLoggedIn = true;
    },
    [authOperations.userLogIn.rejected]() {
      alert("Incorrect Email or Password")
    },
    [authOperations.userLogOut.fulfilled](state, _) {
      state.user = {name: null, email: null};
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrUser = true
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrUser = false
    },
    [authOperations.fetchCurrentUser.rejected](state, _) {
      state.isFetchingCurrUser = false
    },
  }

})
export default authSlice.reducer;