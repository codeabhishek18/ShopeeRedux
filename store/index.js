import { combineReducers, createStore } from "redux";
import productReducer from "./slices/productReducer";
import cartReducer from "./slices/cartReducer";
import wishlistReducer from "./slices/wishlistReducer";

let reducer = combineReducers({
    products : productReducer,
    cartItems : cartReducer,
    wishlist : wishlistReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__())

