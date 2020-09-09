import { PROGRAMADD, SET_PRICE, SET_PHONE } from './action-types';

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
export function setPhone(phone) {
  return {
    type: SET_PHONE,
    phone,
  }
}

