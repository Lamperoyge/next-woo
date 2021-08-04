import { SET_MENU, SET_MENU_ERROR } from './menu.types';
import { MENU_ENDPOINT } from 'endpoints/constants';
import { getData } from 'utils/fetchData';
const SET_MENU_PAYLOAD = (payload) => {
  return {
    type: SET_MENU,
    payload,
  };
};

const SET_MENU_ERROR_PAYLOAD = (payload) => {
  return {
    type: SET_MENU_ERROR,
    payload,
  };
};
export const getMenu = () => async (dispatch) => {
  try {
    const response = await getData(MENU_ENDPOINT);
    dispatch(SET_MENU_PAYLOAD(response));
  } catch (error) {
    dispatch(SET_MENU_ERROR_PAYLOAD(error));
  }
};
