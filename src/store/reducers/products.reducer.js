import { PRODUCTS } from "../../constants/data/products";
import { productsTypes } from "../types/products.types";
const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productsTypes;

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.products.find((el) => el.id === action.productId),
      };
    case FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (el) => el.category === action.categoryId
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
