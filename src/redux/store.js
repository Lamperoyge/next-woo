import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import menuReducer from './menu/menu.reducer';
import favourites from './favourites/favourites.reducer';
import highlights from './highlights/highlights.reducer';
import shopCategory from './shop-category/shop-category.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  menu: menuReducer,
  favourites,
  highlights: highlights,
  shopCategory,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
