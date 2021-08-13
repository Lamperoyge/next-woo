import { SET_CATEGORIES_ERROR, SET_CATEGORIES_DATA } from './categories.types';

const INITIAL_STATE = {
  data: [],
  error: null,
  isLoading: true,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_CATEGORIES_DATA:
      return { ...state, data: payload, error: null, isLoading: false };
    case SET_CATEGORIES_ERROR:
      return { ...state, error: payload, data: [], isLoading: false };
    default:
      return { ...state };
  }
}
