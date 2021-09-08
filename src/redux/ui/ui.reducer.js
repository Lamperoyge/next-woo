import { OPEN_CART, CLOSE_CART } from './ui.types';

const INITIAL_STATE = {
  cart: { isOpen: false },
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_CART:
      return { ...state, cart: { ...state.cart, isOpen: true } };
    case CLOSE_CART:
      return { ...state, cart: { ...state.cart, isOpen: false } };
    default:
      return { ...state };
  }
}
