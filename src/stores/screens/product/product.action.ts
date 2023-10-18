import { createAsyncThunk } from '@reduxjs/toolkit';

import PRODUCT_API from './product.api';

export const getListCategoriesAction = createAsyncThunk<any>(
  'categories',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await PRODUCT_API.getListCategoryAPI();
      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

export const getListProductAction = createAsyncThunk<any, Product.ParamsListProduct>(
  'product',
  async (params, { dispatch, rejectWithValue }) => {
    try {
      const res = await PRODUCT_API.getListProductAPI(params);

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);
