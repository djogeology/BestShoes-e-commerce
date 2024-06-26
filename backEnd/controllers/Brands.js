const Brands = require('../models/Brands');

module.exports = {
  getAllBrands: function(req, res) {
    Brands.getAll(function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  getBrandById: function(req, res) {
    const brandId = req.params.id;

    Brands.getById(brandId, function(err, results) {
      if (err) {
        console.error('Error fetching brand by ID:', err.message);
        res.status(500).json({ error: 'Failed to fetch brand by ID' });
        return;
      }
      res.status(200).json(results);
    });
  },
  addBrand: function(req, res) {
    const { name, logo } = req.body;

    Brands.add(name, logo, (err, results) => {
      if (err) {
        console.error('Error adding brand:', err.message);
        res.status(500).json({ error: 'Failed to add brand' });
        return;
      }
      res.status(200).json({ message: 'Brand added successfully', results });
    });
  },
  updateBrand: function(req, res) {
    const brandId = req.params.id;
    const { name, logo } = req.body;

    Brands.update(brandId, name, logo, (err, results) => {
      if (err) {
        console.error('Error updating brand:', err.message);
        res.status(500).json({ error: 'Failed to update brand' });
        return;
      }
      res.status(200).json({ message: 'Brand updated successfully', results });
    });
  },
  deleteBrand: function(req, res) {
    const brandId = req.params.id;

    Brands.delete(brandId, (err, results) => {
      if (err) {
        console.error('Error deleting brand:', err.message);
        res.status(500).json({ error: 'Failed to delete brand' });
        return;
      }
      res.status(200).json({ message: 'Brand deleted successfully', results });
    });
  }
};
