// controllers/Products.js
const Products = require('../models/Products');

module.exports = {
  getAllProducts: function(req, res) {
    Products.getAll(function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  getProductById: function(req, res) {
    const productId = req.params.id;

    Products.getById(productId, function(err, results) {
      if (err) {
        console.error('Error fetching product by ID:', err.message);
        res.status(500).json({ error: 'Failed to fetch product by ID' });
        return;
      }
      res.status(200).json(results);
    });
  },
  addProduct: function(req, res) {
    const { name, price, description, image, size, quantity, state, category_id, style_id, brand_id, created_at } = req.body;

    const product = {
      name,
      price,
      description,
      image,
      size,
      quantity,
      state,
      category_id,
      style_id,
      brand_id,
      created_at
    };

    Products.add(product, (err, results) => {     
      if (err) {
        console.log(err);
        res.status(500).json({ err });
        return;
      }
      res.status(200).json({ message: 'Product added successfully', results });
    });
  },
  updateProduct: function(req, res) {
    const productId = req.params.id;
    const { name, price, description, image, size, quantity, state, category_id, style_id, brand_id, created_at } = req.body;
  
    if (!image) {
      // Handle the case where image is not provided or is null
      console.error('Image is missing or null.');
      res.status(400).json({ error: 'Image is required.' });
      return;
    }
  
    const product = {
      name,
      price,
      description,
      image, // Ensure image is provided in the request body
      size: JSON.stringify(size),
      quantity,
      state,
      category_id,
      style_id,
      brand_id,
      created_at
    };
  
    Products.update(productId, product, (err, results) => {
      if (err) {
        console.error('Error updating product:', err);
        res.status(500).json({ err });
        return;
      }
      res.status(200).json({ message: 'Product updated successfully', results });
    });
  },
  deleteProduct: function(req, res) {
    const productId = req.params.id;

    Products.delete(productId, (err, results) => {
      if (err) {
        console.error('Error deleting product:', err.message);
        res.status(500).json({ error: 'Failed to delete product' });
        return;
      }
      res.status(200).json({ message: 'Product deleted successfully', results });
    });
  },
  getProductsByQuantity: function(req, res) {
    Products.getByQuantity(function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  getProductsByDate: function(req, res) {
    Products.getByDate(function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  }
};
