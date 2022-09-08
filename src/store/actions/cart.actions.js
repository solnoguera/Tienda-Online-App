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
//No retornamos un objeto sino una funcion con react THUNK
export const confirmCart = (items, total) => {
  console.log("entro");
  return async (dispatch) => {
    try {
      console.log("entro al try");
      const response = await fetch(`${FIREBASE_URL}/orders.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, total, date: Date.now() }),
      });
      const result = await response.json();
      console.warn(result);
      dispatch({ type: CONFIRM_CART, confirm: true });
    } catch (err) {
      console.log(err);
    }
  };
};
