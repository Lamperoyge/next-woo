import {
  SET_HIGHLIGHTED_PRODUCTS,
  SET_HIGHLIGHTED_PRODUCTS_ERROR,
} from './highlights.types';
import { getHighlightedProducts } from 'utils/fetchData';

const setHighlightedProducts = (payload) => ({
  type: SET_HIGHLIGHTED_PRODUCTS,
  payload,
});

const setHighlightedProductsError = (payload) => ({
  type: SET_HIGHLIGHTED_PRODUCTS_ERROR,
  payload,
});

export const getHighlights = () => async (dispatch) => {
  try {
    const highlights = await getHighlightedProducts();
    dispatch(setHighlightedProducts(highlights));
  } catch (error) {
    dispatch(setHighlightedProductsError(error));
  }
};
