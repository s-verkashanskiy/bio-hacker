/* eslint-disable import/extensions */
import express from 'express';
import startPocess from '../workers/start-process.js';
import User from '../models/user.js';

const route = express.Router();

// ручка подписки клиента на пушки
route.post('/subscribe', async (req, res) => {
  const subscription = req.body;
  const id = req.session.user._id;
  subscription.user_id = id;

  // console.log('subscription:  ', subscription);
  try {
    await User.findByIdAndUpdate(id, {
      'chanelOfInfo.pushKey.endpoint': `${subscription.endpoint}`,
      'chanelOfInfo.pushKey.expirationTime': `${subscription.expirationTime}`,
      'chanelOfInfo.pushKey.keysP256dh': `${subscription.keys.p256dh}`,
      'chanelOfInfo.pushKey.keysAuth': `${subscription.keys.auth}`,
    });
  } catch (e) {
    console.log(e.message);
  }

  // start process
  const result = await startPocess(subscription);
  console.log(result);
  res.status(201).json({});
});

export default route;
