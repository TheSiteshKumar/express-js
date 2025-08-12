import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Product name is required'],
    trim: true
  },
  price: { 
    type: Number, 
    required: [true, 'Product price is required'],
    min: 0
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  }
}, { 
  timestamps: true 
});

const Product = mongoose.model('Product', productSchema);

export default Product;