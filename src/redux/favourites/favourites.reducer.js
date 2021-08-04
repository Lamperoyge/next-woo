import {
  SET_FAVOURITE_PRODUCTS,
  SET_FAVOURITE_PRODUCTS_ERROR,
} from './favorites.types';

const INITIAL_STATE = {
  data: [],
  error: null,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_FAVOURITE_PRODUCTS:
      return { ...state, data: payload };
    case SET_FAVOURITE_PRODUCTS_ERROR:
      return { ...state, data: [], error: payload };
    default:
      return { ...state };
  }
}
