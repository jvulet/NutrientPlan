import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  cartTotalQuantity: localStorage.getItem("totalItem")?
  JSON.parse(localStorage.getItem("totalItem")):0,
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
        //console.log(tempProductItem.cartQuantity);
        state.cartTotalQuantity += tempProductItem.cartQuantity;
        console.log(state.cartTotalQuantity);
        state.items.push(tempProductItem);
      }
      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem("totalItem", JSON.stringify(state.cartTotalQuantity));
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.key === action.payload.key
      );
      state.items.map((cartItem) => {
        if (
          cartItem.key === action.payload.key &&
          state.items[itemIndex].cartQuantity > 1
        ) {
          state.items[itemIndex].cartQuantity -= 1;
        } else if (
          cartItem.key === action.payload.key &&
          state.items[itemIndex].cartQuantity === 1
        ) {
          const nextCartItems = state.items.filter(
            (item) => item.key !== cartItem.key
          );
          state.cartTotalQuantity -= cartItem.cartQuantity;
        console.log(state.cartTotalQuantity);
          state.items = nextCartItems;
        }
        localStorage.setItem("items", JSON.stringify(state.items));
        localStorage.setItem("totalItem", JSON.stringify(state.cartTotalQuantity));
        return state;
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
