// This code combines all the other states together

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});

// We are pulling the userReducer into this combinedReducers which will then return it into one giant object that is appropriately bound with all the redux functionality that we want