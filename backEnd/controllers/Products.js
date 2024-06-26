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
        console.error('Error adding product:', err.message);
        res.status(500).json({ error: 'Failed to add product' });
        return;
      }
      res.status(200).json({ message: 'Product added successfully', results });
    });
  },
  updateProduct: function(req, res) {
    const productId = req.params.id;
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

    Products.update(productId, product, (err, results) => {
      if (err) {
        console.error('Error updating product:', err.message);
        res.status(500).json({ error: 'Failed to update product' });
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
  }
};
