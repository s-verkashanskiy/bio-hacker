import mongoose from 'mongoose';
// import Post from './posts.js';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    validate: [
      function (email) {
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
      }, "Электронный адрес должен соответствовать шаблону",
    ],
  },
  password: {
    type: String,
    required: [true, "Не забудьте указать пароль, пожалуйста"],
  },
  registrationDate: {
    type: String,
    default: new Date(new Date().getTime() + 3 * 3600 * 1000).toUTCString().replace(/ GMT$/, ''),
  },
  flag: Number,
  gender: String,
  fullname: {
    type: String,
    trim: true,
  },
  google: Number,
  DOB: String,
  Cards: [{
    key: String,
    cardNumber: Number,
    cardHolder: String,
    cardLive: Number,
  }],
  address: [{
    key: String,
    ZIP: Number,
    state: String,
    city: String,
    street: String,
    building: String,
    appartament: String,
  }],
  chanelOfInfo: {
    email: { type: Boolean, default: false },
    phone: { type: Boolean, default: false },
    phoneNumber: { type: Number, default: null },
    telegram: { type: Boolean, default: false },
    telegramUsername: { type: String, default: '' },
    pushMessage: { type: Boolean, default: false },
    pushKey: { type: Object },
  },
});

userSchema.static('isUserUnique', async function (username) {
  const user = await this.findOne({ username });

  if (user) {
    return `Имя "${username}" уже занято`;
  }
  return false;
});
userSchema.static('isEmailUnique', async function(email) {
  const user = await this.findOne({ email });
  if (user) {
    return `Адрес "${email}" уже занят`;
  };
  return false;
});

userSchema.post('save', (error, doc, next) => {
  const message = error.toString();
  
  if (message.indexOf('username') != -1 && error.code === 11000) {
      next({ message: 'Такой пользователь уже существует' });
  } else if (message.indexOf('email') != -1 && error.code === 11000) {
    next({ message: 'Такой адрес email уже зарегистрирован' });
  }
  else next(error);
});

export default mongoose.model('User', userSchema);
