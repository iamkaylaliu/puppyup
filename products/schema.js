import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    title: { type: String, unique: true, required: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    shortDescription: String,
    price: String,
    condition: String,
    brand: String,
    shippingCost: String,
    shippingFrom: String,
  },
  { collection: 'products' }
);

export default schema;