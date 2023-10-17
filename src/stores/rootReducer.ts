import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from 'src/stores/app';

import { reducer as authReducer } from './screens/auth/auth.reducer';
import { reducer as productReducer } from './screens/product/product.reducer';

export const reducer = combineReducers({
  app: appReducer,

  auth: authReducer,
  product: productReducer
});
