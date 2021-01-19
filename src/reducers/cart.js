import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "products_in_cart",
  initialState: {},
  reducers: {
    addToCart(state, action) {
      const alreadyExists = state.hasOwnProperty(action.payload.product.id);
      if (!alreadyExists) {
        state[`${action.payload.product.id}`] = action.payload.product;
      }
    },
    deleteFromCart(state, action) {
      delete state[`${action.payload.id}`];
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
