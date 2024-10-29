import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Checking if item is already in cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      // Condition for when item is in cart
      if (existingItem) {
        return
      } else {
        state.items.push({...action.payload, quantity: 1});

        // Bit of code below to check if items are added correctly to list
        state.items.forEach((element) => console.log(element.name));
      };
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        ///filtering to remove item from state.items array
        state.items = state.items.filter(item => item.name !== action.payload.name);
      } else {
        return;
      };
    },
    updateQuantity: (state, action) => {
      const modifier = action.payload.modifier;

      if (modifier === -1 && action.payload.item.quantity > 1) {
        state.items.find(item => item.name === action.payload.item.name).quantity--
      } else if (modifier === +1) {
        state.items.find(item => item.name === action.payload.item.name).quantity++
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
