const conn = require('../Database/index');

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM `admins`';
    conn.query(sql, function(error, results) {
      callback(error, results);
    });
  },
  getById: function(id, callback) {
    const query = 'SELECT * FROM admins WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error fetching admin by ID:', err.message);
        callback(err, null);
        return;
      }
      console.log('Admin fetched by ID successfully:', results);
      callback(null, results);
    });
  },
  add: function(username, password, image, callback) { 
    const query = 'INSERT INTO admins (username, password, image) VALUES (?, ?, ?)';
    conn.query(query, [username, password, image], (err, results) => {
      if (err) {
        console.error('Error adding admin to database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Admin added to database successfully:', results);
      callback(null, results);
    });
  },
  update: function(id, username, password, image, callback) { 
    const query = 'UPDATE admins SET username = ?, password = ?, image = ? WHERE id = ?';
    conn.query(query, [username, password, image, id], (err, results) => {
      if (err) {
        console.error('Error updating admin in database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Admin updated in database successfully:', results);
      callback(null, results);
    });
  },
  delete: function(id, callback) {
    const query = 'DELETE FROM admins WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error deleting admin from database:', err.message);
        callback(err, null);
        return;
      }
      console.log('Admin deleted from database successfully:', results);
      callback(null, results);
    });
  }
};
