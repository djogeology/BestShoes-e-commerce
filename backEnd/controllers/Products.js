const Products = require('../models/Products');

module.exports = {
  getAllProducts: function(req, res) {
    Products.getAll(function(err, results) {
      if (err) {
        console.error('Error fetching all products:', err.message);
        res.status(500).json({ error: 'Failed to fetch all products' });
        return;
      }
      res.status(200).json(results);
    });
  },

  getProductById: function(req, res) {
    const productId = req.params.id;

    Products.getById(productId, function(err, results) {
      if (err) {
        console.error(`Error fetching product with ID ${productId}:`, err.message);
        res.status(500).json({ error: `Failed to fetch product with ID ${productId}` });
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

    Products.add(product, function(err, results) {
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
  
    if (!image) {
      console.error('Image is missing or null.');
      res.status(400).json({ error: 'Image is required.' });
      return;
    }
  
    const product = {
      name,
      price,
      description,
      image,
      size: JSON.stringify(size),
      quantity,
      state,
      category_id,
      style_id,
      brand_id,
      created_at
    };
  
    Products.update(productId, product, function(err, results) {
      if (err) {
        console.error(`Error updating product with ID ${productId}:`, err.message);
        res.status(500).json({ error: `Failed to update product with ID ${productId}` });
        return;
      }
      res.status(200).json({ message: `Product with ID ${productId} updated successfully`, results });
    });
  },

  deleteProduct: function(req, res) {
    const productId = req.params.id;

    Products.delete(productId, function(err, results) {
      if (err) {
        console.error(`Error deleting product with ID ${productId}:`, err.message);
        res.status(500).json({ error: `Failed to delete product with ID ${productId}` });
        return;
      }
      res.status(200).json({ message: `Product with ID ${productId} deleted successfully`, results });
    });
  },

  getByCategory: function(req, res) {
    const categoryName = req.params.category;

    Products.getByCategory(categoryName, function(err, results) {
      if (err) {
        console.error(`Error fetching products by category ${categoryName}:`, err.message);
        res.status(500).json({ error: `Failed to fetch products by category ${categoryName}` });
        return;
      }
      res.status(200).json(results);
    });
  },


  getProductsByQuantity: function(req, res) {
    const minQuantity = req.query.minQuantity ? parseInt(req.query.minQuantity) : 30; // Default to 30 if not provided
    console.log('Requested minQuantity:', minQuantity); // Log minQuantity from request
    Products.getByQuantity(minQuantity, function(err, results) {
      if (err) {
        console.error('Error fetching products by quantity:', err.message);
        res.status(500).json({ error: 'Failed to fetch products' });
        return;
      }
      res.status(200).json(results);
    });
  
  },

  getProductsByDate: function(req, res) {
    Products.getByDate(function(err, results) {
      if (err) {
        console.error('Error fetching products by date:', err.message);
        res.status(500).json({ error: 'Failed to fetch products by date' });
        return;
      }
      res.status(200).json(results);
    });
  }

};

