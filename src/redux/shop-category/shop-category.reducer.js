import {
  SET_SHOP_CATEGORY_PRODUCTS_DATA,
  SET_SHOP_CATEGORY_PRODUCTS_ERROR,
} from './shop-category.types';

const INITIAL_STATE = {
  data: [],
  error: null,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_SHOP_CATEGORY_PRODUCTS_DATA:
      return { ...state, data: payload };
    case SET_SHOP_CATEGORY_PRODUCTS_ERROR:
      return { ...state, data: [], error: payload };
    default:
      return { ...state };
  }
}
