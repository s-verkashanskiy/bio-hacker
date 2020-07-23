import mongoose from 'mongoose';

mongoose.connect(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_ADMIN_PASSWORD}@${process.env.DB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

export default mongoose.connection;
