import { createSlice } from "@reduxjs/toolkit";
// import addNewCartItem from "./cartSlice";

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addNewCartItem(state, newObj) {
            //this hurt my soul
                //took 16 hours of research to figure out what was happening
            state.cart.push(newObj.payload)
        }
    }
});

export const selectCart = (state) => state.cart.cart;
export const {addNewCartItem} = cartSlice.actions;

export default cartSlice.reducer;