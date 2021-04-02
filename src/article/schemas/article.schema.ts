import { Schema } from 'mongoose';

export const ArticleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  imageURL: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
