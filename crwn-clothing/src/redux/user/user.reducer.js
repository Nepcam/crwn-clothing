import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }
}

export default userReducer;

// this userReducer is just currently this object with a current user value that will get set whenever the set current user action fires off 