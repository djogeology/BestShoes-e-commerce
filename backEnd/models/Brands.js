const conn = require('../Database/index');

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM `brands`';
    conn.query(sql, function(error, results) {
      callback(error, results);
    });
  },
  add: function(name, logo, callback) { 
    const query = 'INSERT INTO brands (name, logo) VALUES (?, ?)';
    conn.query(query, [name, logo], (err, results) => {
      if (err) {
        console.error('Error adding brand to database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Brand added to database successfully:', results);
      callback(null, results);
    });
  },
  getById: function(id, callback) {
    const query = 'SELECT * FROM brands WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error fetching brand by ID:', err.message);
        callback(err, null);
        return;
      }
      console.log('Brand fetched by ID successfully:', results);
      callback(null, results);
    });
  },
  post: function(name, logo, callback) { 
    const query = 'INSERT INTO brands (name, logo) VALUES (?, ?)';
    conn.query(query, [name, logo], (err, results) => {
      if (err) {
        console.error('Error posting brand to database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Brand posted to database successfully:', results);
      callback(null, results);
    });
  },
  delete: function(id, callback) {
    const query = 'DELETE FROM brands WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error deleting brand from database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Brand deleted from database successfully:', results);
      callback(null, results);
    });
  }
};
