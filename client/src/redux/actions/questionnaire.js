import { ANSWERQUEST } from './action-types'

export function getAnswer (newState) {
  return {
    type: ANSWERQUEST,
    newState
  }
}
