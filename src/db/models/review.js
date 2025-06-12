import { model, Schema } from 'mongoose';

const reviewsSchema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    testimonial: { type: String, required: true },
  },
  { timestamps: false, versionKey: false },
);

export const ReviewsCollection = model('reviews', reviewsSchema);
