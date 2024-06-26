const conn = require('../Database/index');

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM products';
    conn.query(sql, function(error, results) {
      callback(error, results);
    });
  },
  add: function(product, callback) {
    const { name, price, description, image, size, quantity, state, category_id, style_id, brand_id, created_at } = product;
    const query = 'INSERT INTO products (name, price, description, image, size, quantity, state, category_id, style_id, brand_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    conn.query(query, [name, price, description, image, size, quantity, state, category_id, style_id, brand_id, created_at], (err, results) => {
      if (err) {
        console.error('Error adding product to database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Product added to database successfully:', results);
      callback(null, results);
    });
  },
  getById: function(id, callback) {
    const query = 'SELECT * FROM products WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error fetching product by ID:', err.message);
        callback(err, null);
        return;
      }
      console.log('Product fetched by ID successfully:', results);
      callback(null, results);
    });
  },
  update: function(id, product, callback) {
    const { name, price, description, image, size, quantity, state, category_id, style_id, brand_id, created_at } = product;
    const query = 'UPDATE products SET name = ?, price = ?, description = ?, image = ?, size = ?, quantity = ?, state = ?, category_id = ?, style_id = ?, brand_id = ?, created_at = ? WHERE id = ?';
    conn.query(query, [name, price, description, image, size, quantity, state, category_id, style_id, brand_id, created_at, id], (err, results) => {
      if (err) {
        console.error('Error updating product in database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Product updated in database successfully:', results);
      callback(null, results);
    });
  },
  delete: function(id, callback) {
    const query = 'DELETE FROM products WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error deleting product from database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Product deleted from database successfully:', results);
      callback(null, results);
    });
  }
};
