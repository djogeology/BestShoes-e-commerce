const users = require('../models/Users');
const bcrypt=require('bcrypt')
module.exports = {
  getUserByEmailAndPass: function(req, res) {
    const {email,password} = req.body

    users.CheckLogin(email,password, function(err, results) {
      if (err) {
        console.error('Error fetching user by ID:', err.message);
        res.status(500).json({ error: 'Failed to fetch user by ID' });
        return;
      }
      res.status(200).json(results);
    });
  },
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
  addUser: async function(req, res) {
    const { fullname, username, password, email, Adress, phone, image } = req.body;
  
    try {
      // Generate a salt and hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Now use hashedPassword in your database operation
      const results = await new Promise((resolve, reject) => {
        users.add(fullname, username, hashedPassword, email, Adress, phone, image, (err, results) => {
          if (err) reject(err);
          else resolve(results);
        });
      });
  
      res.status(200).json({ message: 'User added successfully', results });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err });
    }
  },
  updateUser: function(req, res) {
    const userId = req.params.id;
    const { fullname, username, password, email, Adress, phone, image } = req.body;

    users.update(userId, fullname, username, password, email, Adress, phone, image, (err, results) => {
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
