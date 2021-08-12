import { SET_CATEGORIES_DATA, SET_CATEGORIES_ERROR } from './categories.types';
import { getCategoriesData } from 'utils/fetchData';
const setCategoriesData = (payload) => ({ type: SET_CATEGORIES_DATA, payload });

const setCategoriesDataError = (payload) => ({
  type: SET_CATEGORIES_ERROR,
  payload,
});

export default function getAsyncCategoriesData() {
  return async (dispatch) => {
    try {
      const response = await getCategoriesData();
      dispatch(setCategoriesData(response));
    } catch (error) {
      dispatch(setCategoriesDataError(error));
    }
  };
}
