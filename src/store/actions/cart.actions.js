import { cartTypes } from "../types/cart.types";
import { FIREBASE_URL } from "../../constants/firebase/index";

const { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } = cartTypes;

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id,
});

export const confirmCart = (payload) => ({
  type: CONFIRM_CART,
  payload,
});
