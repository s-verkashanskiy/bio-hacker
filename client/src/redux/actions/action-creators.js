import {FAILED, AUTHENTICATED_SUCCESSFULLY} from './action-types';


export function failedUser(err) {
  return {
    type: FAILED,
    payload: err,
    error: true,
  }
}

export function getUser(username, flag, id) {
  return {
    type: AUTHENTICATED_SUCCESSFULLY,
    username,
    flag,
    id
  }
}
