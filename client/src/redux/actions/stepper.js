import { STEPPLUS, STEPMINUS, STEPFOUR, STEPZERO } from './action-types';

export function stepPlus () {
  return {
    type: STEPPLUS,
  }
}

export function stepMinus () {
  return {
    type: STEPMINUS,
  }
}

export function stepFour () {
  return {
    type: STEPFOUR,
  }
}

export function stepZero () {
  return {
    type: STEPZERO,
  }
}
