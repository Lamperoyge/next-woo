import { SET_MENU, SET_MENU_ERROR } from './menu.types';

const INIT_STATE = {
  data: [],
  error: null,
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_MENU:
      return { ...state, data: action.payload };
    case SET_MENU_ERROR:
      return { ...state, data: [], error: action.payload };
    default:
      return state;
  }
}
