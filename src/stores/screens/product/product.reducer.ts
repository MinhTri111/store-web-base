import { createSlice } from '@reduxjs/toolkit';
import { getListProductAction, getListCategoriesAction } from './product.action';

const initialState: Product.ProductState = {
  isLoading: false,
  error: null,
  listProduct: null,
  total: null,
  listCategories: null
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
        state.listProduct = action.payload.products;
        state.total = action.payload.summary.count
      })
      .addCase(getListProductAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getListCategoriesAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getListCategoriesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listCategories = action.payload;
      })
      .addCase(getListCategoriesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export { reducer };
export default actions;
