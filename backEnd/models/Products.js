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
    const params = [name, price, description, image, JSON.stringify(size), quantity, state, category_id, style_id, brand_id, created_at];
    
    conn.query(query, params, (err, results) => {
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
        console.error(`Error fetching product by ID ${id}:`, err.message);
        callback(err, null);
        return;
      }
      console.log(`Product fetched by ID ${id} successfully:`, results);
      callback(null, results);
    });
  },

  update: function(id, product, callback) {
    const { name, price, description, image, size, quantity, state, category_id, style_id, brand_id, created_at } = product;
    const query = 'UPDATE products SET name = ?, price = ?, description = ?, image = ?, size = ?, quantity = ?, state = ?, category_id = ?, style_id = ?, brand_id = ?, created_at = ? WHERE id = ?';
    const params = [name, price, description, image, JSON.stringify(size), quantity, state, category_id, style_id, brand_id, created_at, id];
  
    conn.query(query, params, (err, results) => {
      if (err) {
        console.error(`Error updating product with ID ${id}:`, err.message);
        callback(err, null);
        return;
      }
      console.log(`Product with ID ${id} updated successfully:`, results);
      callback(null, results);
    });
  },

  delete: function(id, callback) {
    const query = 'DELETE FROM products WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error(`Error deleting product with ID ${id}:`, err.message);
        callback(err, null);
        return;
      }
      console.log(`Product with ID ${id} deleted successfully:`, results);
      callback(null, results);
    });
  },

  getByCategory: function(category, callback) {
    const sql = 'SELECT p.* FROM products p JOIN categories c ON p.category_id = c.id WHERE c.name = ?';
    conn.query(sql, [category], (err, results) => {
      if (err) {
        console.error(`Error fetching products by category ${category}:`, err.message);
        callback(err, null);
        return;
      }
      console.log(`Products fetched by category ${category} successfully:`, results);
      callback(null, results);
    });
  },

  getByQuantity: function(quantity, callback) {
    const query = 'SELECT * FROM products WHERE quantity < ?';
    conn.query(query, [quantity], (error, results) => {
      if (error) {
        console.error('Error fetching products by quantity:', error.message);
        callback(error, null);
        return;
      }
      console.log('Products fetched by quantity successfully:', results);
      callback(null, results);
    });
  },

  getByDate: function(callback) {
    const query = 'SELECT * FROM products WHERE created_at > DATE_SUB(NOW(), INTERVAL 10 DAY)';
    conn.query(query, function(error, results) {
      if (error) {
        console.error('Error fetching products by date:', error.message);
        callback(error, null);
        return;
      }
      console.log('Products fetched by date successfully:', results);
      callback(null, results);
    });
  }
};
