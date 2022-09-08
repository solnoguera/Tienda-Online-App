import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  categoryReducer,
  productsReducer,
  cartReducer,
  orderReducer,
} from "./reducers";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  order: orderReducer,
});
// Mi estado global es un objeto que contiene mis reductores.
export default createStore(rootReducer, applyMiddleware(thunk));
