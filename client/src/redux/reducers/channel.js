import { SET_CHANNEL, SET_DATE, SET_TELEGRAM_NAME, SET_PUSH_INFO } from '../actions/action-types';

// const initial = {
//   userId: '',
//   channelType: '',
//   telegramUserId: '',
//   startDate: '',
// }

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CHANNEL:
      return {
        ...state,
        channelType: action.channelType,
      }
    case SET_DATE:
      return {
        ...state,
        startDate: action.startDate,
      }
    case SET_TELEGRAM_NAME: 
      return {
        ...state,
        telegramUserName: action.telegramUserName,
      }
    case SET_PUSH_INFO:
      return {
        ...state,
        pushSubscription: {
          endpoint: action.pushSubscription.endpoint, 
          expirationTime: action.pushSubscription.expirationTime, 
          keys: {
            p256dh: action.pushSubscription.keys.p256dh,
            auth: action.pushSubscription.keys.auth
          }
        }
      }

    default:
      return state;
  }
};
