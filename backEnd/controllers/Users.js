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

    users.add(fullname, username, password, email, address, phone, image, (err, results) => {
      if (err) {
        console.error('Error adding user:', err.message);
        res.status(500).json({ error: 'Failed to add user' });
        return;
      }
      res.status(200).json({ message: 'User added successfully', results });
    });
  },
  updateUser: function(req, res) {
    const userId = req.params.id;
    const { fullname, username, password, email, address, phone, image } = req.body;

    users.update(userId, fullname, username, password, email, address, phone, image, (err, results) => {
      if (err) {
        console.error('Error updating user:', err.message);
        res.status(500).json({ error: 'Failed to update user' });
        return;
      }
      res.status(200).json({ message: 'User updated successfully', results });
    });
  },
  deleteUser: function(req, res) {
    const userId = req.params.id;

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
