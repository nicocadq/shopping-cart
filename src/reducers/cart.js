import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'products_in_cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const existingProduct = state.find(({ product }) => product.id === action.payload.product.id);
            if (!existingProduct) {
                state.push(action.payload);
            }
        },
        deleteFromCart(state, action) {
            state.splice(state.indexOf(action.payload), 1);
        },
    },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;