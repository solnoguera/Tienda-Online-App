import { createStore, combineReducers } from "redux";
import { categoryReducer, productsReducer } from "./reducers";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
});
// Mi estado global es un objeto que contiene mis reductores.
export default createStore(rootReducer);
