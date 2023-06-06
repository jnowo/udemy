import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {items: [], itemsCounter: 0, isVisible: false};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.total += item.price;
      } else {
        state.items.push({
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price,
          title: action.payload.title
        });
        state.itemsCounter++;
      }
    },
    removeItemFromCart(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.itemsCounter--;
      } else {
        item.quantity--;
        item.total -= item.price;
      }
    },
    toggleCartVisibility(state) {
      state.isVisible = !state.isVisible;
    }
  }
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;