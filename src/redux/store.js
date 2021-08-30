import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import menuReducer from './menu/menu.reducer';
import favourites from './favourites/favourites.reducer';
import highlights from './highlights/highlights.reducer';
import shopCategory from './shop-category/shop-category.reducer';
import categories from './categories/categories.reducer';
import cart from './cart/cart.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const isClient = typeof window !== 'undefined';

const rootReducer = combineReducers({
  menu: menuReducer,
  favourites,
  highlights: highlights,
  shopCategory,
  categories,
  cart: cart,
});
const initialState = {};
const middleware = [thunk];

let store;
if (isClient) {
  const { persistReducer } = require('redux-persist');
  const storage = require('redux-persist/lib/storage').default;

  const persistConfig = {
    key: 'next-js-wp-ecom',
    storage,
    whitelist: ['cart', 'menu', 'categories', 'shopCategory'],
  };

  store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  store.__PERSISTOR = persistStore(store);
} else {
  store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

export default store;
