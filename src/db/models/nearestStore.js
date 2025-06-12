import { model, Schema } from 'mongoose';

const nearestStoresSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    rating: { type: Number, required: true },
    isOpen: { type: Boolean, required: true },
  },
  { timestamps: false, versionKey: false },
);

export const NearestStoresSchemaCollection = model(
  'nearest_pharmacies',
  nearestStoresSchema,
);
