import { FIREBASE_URL } from "../../constants/firebase";
import { orderTypes } from "../types/order.types";
const { GET_ORDERS, DELETE_ORDER } = orderTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_URL}/orders.json`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.warn(data);
      const orders = Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key,
        };
      });
      console.warn(orders);
      dispatch({
        type: GET_ORDERS,
        orders,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteOrder = (orderId) => {
  return async (dispatch) => {
    try {
      await fetch(`${FIREBASE_URL}/orders/${orderId}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch({ type: DELETE_ORDER, orderId });
    } catch (error) {
      console.log(error);
    }
  };
};
