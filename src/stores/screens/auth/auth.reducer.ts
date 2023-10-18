import { createSlice } from '@reduxjs/toolkit';
import { loginAction, getMeAction, registerAction } from './auth.action';

const initialState: Auth.LoginState = {
  isLoading: false,
  error: null,
  meInfo: null,
  getMeLoading: false,
};

const { actions, reducer } = createSlice({
  name: 'auth_slice',
  initialState,
  reducers: {
    logOut: state => {
      state.meInfo = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(registerAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(getMeAction.pending, (state, action) => {
        state.getMeLoading = true;
      })
      .addCase(getMeAction.fulfilled, (state, action) => {
        state.getMeLoading = false;
        state.meInfo = action.payload;
      })
      .addCase(getMeAction.rejected, (state, action) => {
        state.getMeLoading = false;
        state.error = action.payload;
      });
  },
});

export { reducer };
export default actions;
