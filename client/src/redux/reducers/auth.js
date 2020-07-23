import { AUTHENTICATED_SUCCESSFULLY, LOGOUT } from '../actions/action-types';


export default (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATED_SUCCESSFULLY:
      return {
        isAuthenticated: true,
        username: action.username,
        flag: action.flag,
        id: action.id,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        username: undefined
      };
    default:
      return state;
  }
};
