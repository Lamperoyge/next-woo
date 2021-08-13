import { data } from 'autoprefixer';
import {
  SET_SHOP_CATEGORY_PRODUCTS_DATA,
  SET_SHOP_CATEGORY_PRODUCTS_ERROR,
  CLEAN_STATE,
  SET_IS_LOADING,
} from './shop-category.types';

const INITIAL_STATE = {
  data: [],
  error: null,
  count: 0,
  isLoading: true,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_SHOP_CATEGORY_PRODUCTS_DATA:
      return {
        ...state,
        data: payload.data,
        count: payload.count,
        isLoading: false,
      };
    case SET_IS_LOADING:
      return { ...state, isLoading: payload };
    case SET_SHOP_CATEGORY_PRODUCTS_ERROR:
      return { ...state, data: [], error: payload, count: 0, isLoading: false };
    case CLEAN_STATE:
      return { ...state, ...INITIAL_STATE };
    default:
      return { ...state };
  }
}
