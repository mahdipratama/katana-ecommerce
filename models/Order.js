import { model, models, Schema } from 'mongoose';

const OrderSchema = new Schema(
  {
    products: Object,
    name: String,
    email: String,
    city: String,
    postal: Number,
    address: String,
    country: String,
    paid: { type: Number, defaultValue: 0 },
  },
  { timestamps: true }
);

const Order = models?.Order || model('Order', OrderSchema);

export default Order;
