// controllers/productController.js
import Product from '../models/product.js';

export const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = await Product.create({name, quantity });
    res.json({ data: { product } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ data: { products } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.json({ data: { message: 'Product deleted' } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// export const updateProductQuantity = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const number = parseInt(req.query.number);
//     const product = await Product.findById(id);
//     product.quantity += number;
//     await product.findByIdAndUpdate();
//     res.json({ data: { product, message: 'Updated successfully' } });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

export const updateProductQuantity = async (req, res) => {
    try {
      const id = req.params.id;
      const number = parseInt(req.query.number);
      const product = await Product.findById(id);
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Update quantity
      product.quantity += number;
      await product.save();
  
      res.json({ data: { product, message: 'Updated successfully' } });
    } catch (error) {
      console.error(error); // Log the actual error for debugging
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  