import { createAsyncThunk } from '@reduxjs/toolkit';

import PRODUCT_API from './product.api';

export const getListCategoriesAction = createAsyncThunk<any>(
  'categories',
  async (params: any, { dispatch, rejectWithValue }) => {
    try {
      const res = await PRODUCT_API.getListCategoryAPI(params);

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

export const getListProductAction = createAsyncThunk<any>(
  'categories',
  async (params: any, { dispatch, rejectWithValue }) => {
    try {
      const res = await PRODUCT_API.getListProductAPI(params);

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);
