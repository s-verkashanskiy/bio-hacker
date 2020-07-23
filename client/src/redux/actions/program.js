import { PROGRAMADD, SET_PRICE } from './action-types';

export function programAdd (obj) {
  return {
    type: PROGRAMADD,
    obj,
  }
}
export function setPrice( price) {
  return {
    type: SET_PRICE,
    price,
  }
}
