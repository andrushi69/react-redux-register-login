import authOperations from "./AuthorizeOperations"
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: {name: null, email: null},
  token: null,
  isLoggedIn: false,
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
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.userLogOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  }
})
export default authSlice.reducer;