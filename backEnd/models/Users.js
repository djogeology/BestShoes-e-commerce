const conn = require('../Database/index');

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM users';
    conn.query(sql, function(error, results) {
      callback(error, results);
    });
  },
  getById: function(id, callback) {
    const query = 'SELECT * FROM users WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error fetching user by ID:', err.message);
        callback(err, null);
        return;
      }
      console.log('User fetched by ID successfully:', results);
      callback(null, results);
    });
  },
  add: function(fullname, username, password, email, address, phone, image, callback) {
    const query = 'INSERT INTO users (fullname, username, password, email, address, phone, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
    conn.query(query, [fullname, username, password, email, address, phone, image], (err, results) => {
      if (err) {
        console.error('Error adding user to database:', err.message);
        callback(err, null);
        return;
      }
      console.log('User added to database successfully:', results);
      callback(null, results);
    });
  },
  update: function(id, fullname, username, password, email, address, phone, image, callback) {
    const query = 'UPDATE users SET fullname = ?, username = ?, password = ?, email = ?, address = ?, phone = ?, image = ? WHERE id = ?';
    conn.query(query, [fullname, username, password, email, address, phone, image, id], (err, results) => {
      if (err) {
        console.error('Error updating user in database:', err.message);
        callback(err, null);
        return;
      }
      console.log('User updated in database successfully:', results);
      callback(null, results);
    });
  },
  delete: function(id, callback) {
    const query = 'DELETE FROM users WHERE id = ?';
    conn.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error deleting user from database:', err.message);
        callback(err, null);
        return;
      }
      console.log('User deleted from database successfully:', results);
      callback(null, results);
    });
  }
};
