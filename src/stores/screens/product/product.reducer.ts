import { createSlice } from '@reduxjs/toolkit';
import { getListProductAction } from './product.action';

const initialState: Product.ProductState = {
  isLoading: false,
  error: null,
  listProduct: null,
};

const { actions, reducer } = createSlice({
  name: 'product_slice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getListProductAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getListProductAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listProduct = action.payload;
      })
      .addCase(getListProductAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export { reducer };
export default actions;
