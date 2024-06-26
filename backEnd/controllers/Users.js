const users = require('../models/Users');

module.exports = {
  getAllUsers: function(req, res) {
    users.getAll(function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  getUserById: function(req, res) {
    const userId = req.params.id;

    users.getById(userId, function(err, results) {
      if (err) {
        console.error('Error fetching user by ID:', err.message);
        res.status(500).json({ error: 'Failed to fetch user by ID' });
        return;
      }
      res.status(200).json(results);
    });
  },
  addUser: function(req, res) {
    const { fullname, username, password, email, address, phone, image } = req.body;

    // Add user to the database using the model function
    users.add(fullname, username, password, email, address, phone, image, (err, results) => {
      if (err) {
        console.error('Error adding user:', err.message);
        res.status(500).json({ error: 'Failed to add user' });
        return;
      }
      res.status(200).json({ message: 'User added successfully', results });
    });
  },
  postUser: function(req, res) {
    const { fullname, username, password, email, address, phone, image } = req.body;

    // Post user to the database using the model function
    users.post(fullname, username, password, email, address, phone, image, (err, results) => {
      if (err) {
        console.error('Error posting user:', err.message);
        res.status(500).json({ error: 'Failed to post user' });
        return;
      }
      res.status(200).json({ message: 'User posted successfully', results });
    });
  },
  deleteUser: function(req, res) {
    const userId = req.params.id;

    // Delete user from the database using the model function
    users.delete(userId, (err, results) => {
      if (err) {
        console.error('Error deleting user:', err.message);
        res.status(500).json({ error: 'Failed to delete user' });
        return;
      }
      res.status(200).json({ message: 'User deleted successfully', results });
    });
  }
};
