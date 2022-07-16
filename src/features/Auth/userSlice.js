import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import StorageKeys from 'constants/storage-key';


export const register = createAsyncThunk('user/register', async (payload) => {
  const res = await authApi.register(payload);
  localStorage.setItem(StorageKeys.TOKEN, res.data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(res.data.user));
  return res.data.user;
});



export const login = createAsyncThunk('user/login', async (payload) => {
  const res = await authApi.login(payload);
  localStorage.setItem(StorageKeys.TOKEN, res.data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(res.data.user));
  return res.data.user;
});




const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
    toggle: 1,
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      state.current = {};
    },
    isToggle(state, action) {
      state.toggle = action.payload;
      state.toggle += 1;
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer, isToggle } = userSlice;
export const { logout } = actions;
export default reducer; //default export
