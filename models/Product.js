import { model, models, Schema } from 'mongoose';

const ProductSchema = new Schema({
  name: String,
  category: String,
  pictures: [String],
  description: {
    accessories: String,
    length: String,
    process: String,
    sheatMaterial: String,
    thickness: String,
    width: String,
  },
  price: {
    oldPrice: Number,
    discPrice: Number,
  },
  isFeatured: Boolean,
  isTrending: Boolean,
  relations: [String],
});

const Product = models?.Product || model('Product', ProductSchema);

export default Product;
