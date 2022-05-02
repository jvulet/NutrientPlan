import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  status: null,
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action) {
      /*  state.items.push(action.payload); */
      const existingIndex = state.items.findIndex(
        (item) => item.key === action.payload.key
      );

      if (existingIndex >= 0) {
        state.items[existingIndex] = {
          ...state.items[existingIndex],
          cartQuantity: state.items[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProductItem);
      }
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.key === action.payload.key
      );
      state.items.map((cartItem) => {
        if (cartItem.key === action.payload.key && state.items[itemIndex].cartQuantity>1) {
          state.items[itemIndex].cartQuantity-=1

        }

      else  if (cartItem.key === action.payload.key && state.items[itemIndex].cartQuantity === 1) {
      
          const nextCartItems = state.items.filter(
            (item) => item.key !== cartItem.key
          );
          state.items = nextCartItems;

        }
        localStorage.setItem("items", JSON.stringify(state.items));
        return state;
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
