import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import AUTH_API from './auth.api';
import { LOCAL_STORAGE_KEY } from 'src/constants';

export const loginAction = createAsyncThunk<any, Auth.LoginRequestPayload>(
  'auth',
  async ({ data, callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const user = await AUTH_API.loginAPI(data);

      if (user?.access_token) {
        await localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, user.access_token);
        await dispatch(getMeAction());
        callback();
      }

      return user;
    } catch (err: any) {
      rejectWithValue(err?.response?.data || err?.name);
    }
  },
);

export const registerAction = createAsyncThunk<any, Auth.LoginRequestPayload>(
  'register',
  async ({ data, callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const user = await AUTH_API.registerAPI(data);
      if (user?.id) {
        callback();
      }
      return user;
    } catch (err: any) {
      void message.error(err.message);
      rejectWithValue(err?.response?.data || err?.name);
    }
  },
);

export const getMeAction = createAsyncThunk<any>('me', async (_, { dispatch, rejectWithValue }) => {
  try {
    const res = await AUTH_API.getMeAPI();

    return res;
  } catch (err: any) {
    return rejectWithValue(err);
  }
});
