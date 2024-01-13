import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cartItems: [],
}
const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const isPresent = state.cartItems.find((item) => { return item.id == newItem.id });
            if (isPresent) return state;
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        },
        removeFromCart:(state,action)=>{
            const newCartItems = state.cartItems.filter((item)=>{return item.id!=action.payload})
            return {
                ...state,
                cartItems:newCartItems,
            }
        }
    }
})
export const { addToCart,removeFromCart } = checkoutSlice.actions;
export default checkoutSlice.reducer;