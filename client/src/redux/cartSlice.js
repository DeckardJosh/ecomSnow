import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addNewCartItem(state, newObj) {
            state.cart = [...state.cart, newObj.payload];
        },
        removeCartItem(state, obj){
            // state.cart = state.cart.filter(item => item.id !== obj.payload.id);
            state.cart = state.cart.filter(item => !(item.id === obj.payload.id && item.size === obj.payload.size));
        }
    }
});

export const selectCart = (state) => state.cart.cart;
export const {addNewCartItem} = cartSlice.actions;
export const {removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;