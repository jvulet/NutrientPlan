import { createSlice } from "@reduxjs/toolkit";
import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../components/firebase";

const initialState = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  cartTotalQuantity: localStorage.getItem("totalItem")
    ? JSON.parse(localStorage.getItem("totalItem"))
    : 0,
  status: null,
  userId: null,
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.items.findIndex(
        (item) => item.key === action.payload.key
      );

      if (existingIndex >= 0) {
        state.items[existingIndex] = {
          ...state.items[existingIndex],
          cartQuantity: state.items[existingIndex].cartQuantity + 1,
          userId: auth.currentUser.uid,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartTotalQuantity += tempProductItem.cartQuantity;
        state.items.push(tempProductItem);

        state.userId = auth.currentUser.uid;
      }

      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem(
        "totalItem",
        JSON.stringify(state.cartTotalQuantity)
      );
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
        localStorage.setItem(
          "totalItem",
          JSON.stringify(state.cartTotalQuantity)
        );
        return state;
      });
    },

    setCartToNull(state) {
      state.items = [];
      state.userId = null;
      state.cartTotalQuantity = 0;
      return state;
    },

    addToCartFromDB(state, action) {
      console.log(action.payload);

      if (action.payload) {
        setDoc(doc(db, "groceryList", `${auth.currentUser.uid}`), {
          productName: arrayUnion({ ...state.items }),
        });
      }
    },

    addCartTotalQuantity(state, action) {
      state.cartTotalQuantity = action.payload;
    },

    addProductFromDBToCart(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setCartToNull,
  addToCartFromDB,
  addProductFromDBToCart,
  addCartTotalQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
