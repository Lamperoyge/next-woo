import {
  SET_SHOP_CATEGORY_PRODUCTS_DATA,
  SET_SHOP_CATEGORY_PRODUCTS_ERROR,
} from './shop-category.types';
import { getProductsData } from 'utils/fetchData';
const setProductsData = (payload) => ({
  type: SET_SHOP_CATEGORY_PRODUCTS_DATA,
  payload,
});

export const cleanShopCategory = () => ({ type: 'default' });
const setProductsError = (payload) => ({
  type: SET_SHOP_CATEGORY_PRODUCTS_ERROR,
  payload,
});

const getAsyncProductsData =
  (categoryId, params = { page: 1, per_page: 10 }) =>
  async (dispatch) => {
    try {
      const result = await getProductsData({ category: categoryId, ...params });
      dispatch(setProductsData(result));
    } catch (error) {
      dispatch(setProductsError(error));
    }
  };

export default getAsyncProductsData;
