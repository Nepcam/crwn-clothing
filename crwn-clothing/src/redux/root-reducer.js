// This code combines all the other states together

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});

// We are pulling the userReducer into this combinedReducers which will then return it into one giant object that is appropriately bound with all the redux functionality that we want