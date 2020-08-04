import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/products';
import cartReducer from '../reducers/cart';

export default configureStore({
  reducer: {
    products : productsReducer,
    productsInCart : cartReducer,
  },
});
