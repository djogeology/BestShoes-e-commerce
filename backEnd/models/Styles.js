const conn = require('../Database/index');

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM `styles`';
    conn.query(sql, function(error, results) {
      callback(error, results);
    });
  },
  add: function(name, image, callback) { 
    const query = 'INSERT INTO users (name, image) VALUES (?, ?)';
    conn.query(query, [name, image], (err, results) => {
      if (err) {
        console.error('Error adding style to database:', err.message);
        callback(err, null);
        return;
      }
      console.log('style added to database successfully:', results);
      callback(null, results);
    });
  },
  getById: function(id, callback) {
    const query = 'SELECT * FROM styles WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error fetching style by ID:', err.message);
        callback(err, null);
        return;
      }
      console.log('Style fetched by ID successfully:', results);
      callback(null, results);
    });
  },
  post: function(name, image, callback) { 
    const query = 'INSERT INTO styles (name, image) VALUES (?, ?)';
    conn.query(query, [name, image], (err, results) => {
      if (err) {
        console.error('Error posting style to database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Style posted to database successfully:', results);
      callback(null, results);
    });
  },
  delete: function(id, callback) {
    const query = 'DELETE FROM styles WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error deleting style from database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Style deleted from database successfully:', results);
      callback(null, results);
    });
  }
};

