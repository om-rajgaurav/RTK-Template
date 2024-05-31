// authSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isAuthenticated: false,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
});

export const {setToken, logout, setUserData} = authSlice.actions;
export default authSlice.reducer;
