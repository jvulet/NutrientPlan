import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './rootReducer'


const store = configureStore({
  reducer: {
    product: cartSlice,
  },
});

export default store;
