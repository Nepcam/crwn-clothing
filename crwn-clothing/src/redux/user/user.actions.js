import { UserActionTypes } from './user.types';

export const setCurrentUser = user =>({
  type: UserActionTypes.SET_CURRENT_USER,   // this is the string that our user.reducer is expecting 
  payload: user
});