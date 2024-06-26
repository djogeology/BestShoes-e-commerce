const styles = require('../models/Styles');

module.exports = {
  getAllStyles: function(req, res) {
    styles.getAll(function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  getStyleById: function(req, res) {
    const styleId = req.params.id;

    styles.getById(styleId, function(err, results) {
      if (err) {
        console.error('Error fetching style by ID:', err.message);
        res.status(500).json({ error: 'Failed to fetch style by ID' });
        return;
      }
      res.status(200).json(results);
    });
  },
  addStyle: function(req, res) {
    const { name, image } = req.body;

    styles.add(name, image, (err, results) => {
      if (err) {
        console.error('Error adding style:', err.message);
        res.status(500).json({ error: 'Failed to add style' });
        return;
      }
      res.status(200).json({ message: 'Style added successfully', results });
    });
  },
  updateStyle: function(req, res) {
    const styleId = req.params.id;
    const { name, image } = req.body;

    styles.update(styleId, name, image, (err, results) => {
      if (err) {
        console.error('Error updating style:', err.message);
        res.status(500).json({ error: 'Failed to update style' });
        return;
      }
      res.status(200).json({ message: 'Style updated successfully', results });
    });
  },
  deleteStyle: function(req, res) {
    const styleId = req.params.id;

    styles.delete(styleId, (err, results) => {
      if (err) {
        console.error('Error deleting style:', err.message);
        res.status(500).json({ error: 'Failed to delete style' });
        return;
      }
      res.status(200).json({ message: 'Style deleted successfully', results });
    });
  }
};
