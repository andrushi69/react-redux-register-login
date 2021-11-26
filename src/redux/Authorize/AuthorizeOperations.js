import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import Error from "../../components/Error/Error";


axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


const userRegister = createAsyncThunk('auth/register', async credentials => {
  try {
    const {data} = await axios.post('/users/signup', credentials);
    token.set(data.token)
    return data;
  } catch (error) {
    return (
      <Error error={error}/>
    )
  }
});
const userLogIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const {data} = await axios.post('/users/login', credentials);
    token.set(data.token)
    return data;
  } catch (error) {
    return (
      <Error error={error}/>
    )
  }
});
const userLogOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset()
  } catch (error) {
    return (
      <Error error={error}/>
    )
  }
});
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return (
        <Error error={error}/>
      )
    }
  },
);
const operations = {
  userRegister,
  userLogIn,
  userLogOut,
  fetchCurrentUser
};
export default operations;
