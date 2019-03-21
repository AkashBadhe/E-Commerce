import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  createdBy: {
    type: string,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
