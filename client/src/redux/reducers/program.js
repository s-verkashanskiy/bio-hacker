import { PROGRAMADD, SET_PRICE, SET_PHONE } from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case PROGRAMADD:
      return action.obj;
    case SET_PRICE:
      return {
        ...state,
        price: action.price,
    }
    case SET_PHONE:
      return {
        ...state,
        phone: action.phone,
    }
    default:
      return state;
  }
};
