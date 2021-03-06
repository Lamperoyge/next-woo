import { data } from 'autoprefixer';
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  OPEN_CART,
  CLOSE_CART,
} from './cart.types';
const INITIAL_STATE = {
  data: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, payload],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        data: [
          ...state.data.slice(0, payload),
          ...state.data.slice(payload + 1),
        ],
      };
    case CLEAR_CART:
      return { ...state, data: [] };
    default:
      return state;
  }
}
