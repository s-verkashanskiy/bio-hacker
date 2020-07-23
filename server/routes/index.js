import express from 'express';
import argon2 from 'argon2';
import User from '../models/user.js';
import Course from '../models/course.js';
import Program from '../models/program.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.end();
});

router
  .route('/signup')
  .get((req, res) => {
    res.end();
  })
  .post(async (req, res) => {
    const {
      username, email, password, fullname,
    } = req.body;
    // Проверка уникальности username и email вручную
    try {
      const errUnqUser = await User.isUserUnique(username);
      const errUnqEmail = await User.isEmailUnique(email);
      if (errUnqUser || errUnqEmail) {
        return res.status(401).json({ message: errUnqUser || errUnqEmail });
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: error.message });
    }

    // username и email вручную
    try {
      const user = await new User({
        fullname,
        username,
        email,
        password: await argon2.hash(password),
        flag: 0,
      }).save();
      req.session.user = user;
      return res.status(200).json({ username: user.username, flag: user.flag, id: user._id });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: error.message });
    }
  });

router
  .route('/login')
  .get((req, res) => {
    if (req.session.user) res.end();
    res.end();
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user && (await argon2.verify(user.password, password))) {
        req.session.user = user;
        req.session.user.password = undefined;
        res.json({ username: user.username, flag: user.flag, id: user._id });
      } else if (!user) {
        res.status(401).json({ message: 'Введенный e-mail не зарегистрирован' });
      } else {
        res.status(401).json({ message: 'Введенный пароль не совпадает' });
      }
    } catch (error) {
      console.log(error.message);
      res.status(401).json({ message: error.message });
    }
  });

router.get('/logout', async (req, res) => {
  if (req.session) {
    try {
      await req.session.destroy();
    } catch (error) {
      console.log(error.message);
      res.status(401).json({ message: error.message });
    }
    res.clearCookie('user_sid');
  }
  res.end();
});

router.get('/checkSession', (req, res) => {
  if (req.session.user) {
    return res.json({
      username: req.session.user.username,
      flag: req.session.user.flag,
      id: req.session.user._id,
    });
  }
  res.status(401).end();
});

router.post('/flag', async (req, res) => {
  const { id, flag } = req.body;
  try {
    await User.findByIdAndUpdate(id, { flag: 1 });
    res.status(200).end();
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: e.message });
  }
});

router.post('/settings', async (req, res) => {
  const {
    id, username, programId, channelType, startDate, telegramUserName, pushSubscription,
  } = req.body;
  // console.log(startDate);
  let email;
  let telegram;
  let pushMessage;
  // const STDATE = startDate(startDate.getTime() + 3 * 3600 * 1000).toUTCString().replace(/ GMT$/, '');
  const STDATE = new Date(startDate);
  try {
    const course = await new Course({
      user: id,
      program: programId,
      date: STDATE,
      description: `Course for ${username} start ${STDATE}`,
      events: await Program.generateEvents(STDATE.getTime(), programId),
    });
    await course.save();
  } catch (e) {
    console.log(e);
  }

  function setChannelFlags(channelType) {
    if (channelType === 'email') return (email = true, telegram = false, pushMessage = false);
    if (channelType === 'telegram') return (email = false, telegram = true, pushMessage = false);
    if (channelType === 'push') return (email = false, telegram = false, pushMessage = true);
  }

  setChannelFlags(channelType);

  try {
    await User.findByIdAndUpdate(id, {
      DOB: `${startDate}`,
      'chanelOfInfo.email': `${email}`,
      'chanelOfInfo.telegram': `${telegram}`,
      'chanelOfInfo.telegramUsername': `${telegramUserName}`,
      'chanelOfInfo.pushMessage': `${pushMessage}`,
      flag: 2,
    });

    res.status(200).end();
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: e.message });
  }
});

export default router;
