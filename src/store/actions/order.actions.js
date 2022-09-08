import { FIREBASE_URL } from "../../constants/firebase";

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
        type: "GET_ORDERS",
        orders,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
