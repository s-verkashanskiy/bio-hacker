import { STEPPLUS, STEPMINUS, STEPFOUR, STEPZERO } from '../actions/action-types';

export default (state = 0, action) => {
  switch (action.type) {
    case STEPPLUS:
      return state = state + 1;
    case STEPMINUS:
      return state = state - 1;
    case STEPFOUR:
      return state = 3;
    case STEPZERO:
      return state = 0;
    default:
      return state;
  }
};
