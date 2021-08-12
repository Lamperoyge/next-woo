import {
  SET_FAVOURITE_PRODUCTS,
  SET_FAVOURITE_PRODUCTS_ERROR,
} from './favorites.types';
import { getFeaturedProducts } from 'utils/fetchData';

const setFavouriteProducts = (payload) => ({
  type: SET_FAVOURITE_PRODUCTS,
  payload,
});

const setFavouriteProductsError = (payload) => ({
  type: SET_FAVOURITE_PRODUCTS_ERROR,
  payload,
});

export const getFavouriteProducts = () => async (dispatch) => {
  try {
    const favouriteProducts = await getFeaturedProducts();
    dispatch(setFavouriteProducts(favouriteProducts));
  } catch (error) {
    dispatch(setFavouriteProductsError(error));
  }
};
