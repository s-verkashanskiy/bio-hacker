import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const questSchema = new Schema({
  questionIndex: {
    type: Number,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  data: [{
    key: {
      type: Number,
      required: true,
    },
    questionOption: {
      type: String,
      required: true,
    },
    questionAnswer: {
      type: Boolean,
      required: true,
    },
  }],
});

export default model('Board', questSchema);
