import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  OPEN_CART,
  CLOSE_CART,
} from './cart.types';

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload: payload });

export const deleteFromCart = (payload) => ({
  type: DELETE_FROM_CART,
  payload: payload,
});

export const openCart = () => ({ type: OPEN_CART });

export const closeCart = () => ({ type: CLOSE_CART });
export const clearCart = () => ({ type: CLEAR_CART });
