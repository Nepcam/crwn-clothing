export const setCurrentUser = user =>({
  type: 'SET_CURRENT_USER',   // this is the string that our user.reducer is expecting 
  payload: user
});