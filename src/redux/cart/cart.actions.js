import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from './cart.types';

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload: payload });

export const deleteFromCart = (payload) => ({
  type: DELETE_FROM_CART,
  payload: payload,
});

export const clearCart = () => ({ type: CLEAR_CART });
