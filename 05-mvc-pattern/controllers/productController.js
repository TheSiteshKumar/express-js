import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    
    if (products.length === 0) {
      return res.status(200).json({ 
        success: true, 
        message: "No products found",
        data: []
      });
    }
    
    res.status(200).json({ 
      success: true, 
      count: products.length,
      data: products 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Internal server error",
      error: error.message
    });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ 
        success: false, 
        message: "Product not found" 
      });
    }
    
    res.status(200).json({ 
      success: true, 
      data: product 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Internal server error",
      error: error.message
    });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Public
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    
    const product = await Product.create({
      name,
      price,
      description,
      category
    });
    
    res.status(201).json({ 
      success: true, 
      message: "Product created successfully",
      data: product 
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Internal server error",
      error: error.message
    });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Public
export const updateProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    
    let product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ 
        success: false, 
        message: "Product not found" 
      });
    }
    
    product = await Product.findByIdAndUpdate(
      req.params.id, 
      { name, price, description, category }, 
      { new: true, runValidators: true }
    );
    
    res.status(200).json({ 
      success: true, 
      message: "Product updated successfully",
      data: product 
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Internal server error",
      error: error.message
    });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Public
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ 
        success: false, 
        message: "Product not found" 
      });
    }
    
    await Product.findByIdAndDelete(req.params.id);
    
    res.status(200).json({ 
      success: true, 
      message: "Product deleted successfully",
      data: {} 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Internal server error",
      error: error.message
    });
  }
};