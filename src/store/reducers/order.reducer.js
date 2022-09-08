import { orderTypes } from "../types/order.types";
const { GET_ORDERS } = orderTypes;

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    default:
      return state;
  }
};

export default orderReducer;
