const Admins = require('../models/Admins');

module.exports = {
  getAllAdmins: function(req, res) {
    Admins.getAll(function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  getAdminById: function(req, res) {
    const adminId = req.params.id;

    Admins.getById(adminId, function(err, results) {
      if (err) {
        console.error('Error fetching admin by ID:', err.message);
        res.status(500).json({ error: 'Failed to fetch admin by ID' });
        return;
      }
      res.status(200).json(results);
    });
  },
  addAdmin: function(req, res) {
    const { username, password, image } = req.body;

    // Add admin to the database using the model function
    Admins.add(username, password, image, (err, results) => {
      if (err) {
        console.error('Error adding admin:', err.message);
        res.status(500).json({ error: 'Failed to add admin' });
        return;
      }
      res.status(200).json({ message: 'Admin added successfully', results });
    });
  },
  updateAdmin: function(req, res) {
    const adminId = req.params.id;
    const { username, password, image } = req.body;

    // Update admin in the database using the model function
    Admins.update(adminId, username, password, image, (err, results) => {
      if (err) {
        console.error('Error updating admin:', err.message);
        res.status(500).json({ error: 'Failed to update admin' });
        return;
      }
      res.status(200).json({ message: 'Admin updated successfully', results });
    });
  },
  deleteAdmin: function(req, res) {
    const adminId = req.params.id;

    // Delete admin from the database using the model function
    Admins.delete(adminId, (err, results) => {
      if (err) {
        console.error('Error deleting admin:', err.message);
        res.status(500).json({ error: 'Failed to delete admin' });
        return;
      }
      res.status(200).json({ message: 'Admin deleted successfully', results });
    });
  }
};
