import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
//import rootReducer from "./rootReducer";
//import { combineReducers } from "redux";
import cartSlice from './rootReducer'

/* const rootReducer = combineReducers({
  shop: shopReducer,
});
 */
const store = configureStore({
  reducer: {
    product: cartSlice,
  },
});

export default store;
