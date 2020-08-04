import { createSlice } from '@reduxjs/toolkit';

import products from '../productos.json';

const initialState = products;

const productsSlice = createSlice({
    name: 'products_in_cart',
    initialState,
    reducers: {

    },
});

 
export default productsSlice.reducer;