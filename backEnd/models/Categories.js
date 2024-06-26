const conn = require('../Database/index');

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM categories';
    conn.query(sql, function(error, results) {
      callback(error, results);
    });
  },
  add: function(name, image, callback) { 
    const query = 'INSERT INTO categories (name, image) VALUES (?, ?)';
    conn.query(query, [name, image], (err, results) => {
      if (err) {
        console.error('Error adding category to database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Category added to database successfully:', results);
      callback(null, results);
    });
  },
  getById: function(id, callback) {
    const query = 'SELECT * FROM categories WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error fetching category by ID:', err.message);
        callback(err, null);
        return;
      }
      console.log('Category fetched by ID successfully:', results);
      callback(null, results);
    });
  },
  update: function(id, name, image, callback) { 
    const query = 'UPDATE categories SET name = ?, image = ? WHERE id = ?';
    conn.query(query, [name, image, id], (err, results) => {
      if (err) {
        console.error('Error updating category in database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Category updated in database successfully:', results);
      callback(null, results);
    });
  },
  delete: function(id, callback) {
    const query = 'DELETE FROM categories WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error deleting category from database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Category deleted from database successfully:', results);
      callback(null, results);
    });
  }
};
