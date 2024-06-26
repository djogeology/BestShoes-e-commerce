const Categories = require('../models/Categories');

module.exports = {
  getAllCategories: function(req, res) {
    Categories.getAll(function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  getCategorieById: function(req, res) {
    const categoryId = req.params.id;

    Categories.getById(categoryId, function(err, results) {
      if (err) {
        console.error('Error fetching category by ID:', err.message);
        res.status(500).json({ error: 'Failed to fetch category by ID' });
        return;
      }
      res.status(200).json(results);
    });
  },
  addCategorie: function(req, res) {
    const { name, image } = req.body;

    Categories.add(name, image, (err, results) => {
      if (err) {
        console.error('Error adding category:', err.message);
        res.status(500).json({ error: 'Failed to add category' });
        return;
      }
      res.status(200).json({ message: 'Category added successfully', results });
    });
  },
  updateCategorie: function(req, res) {
    const categoryId = req.params.id;
    const { name, image } = req.body;

    Categories.update(categoryId, name, image, (err, results) => {
      if (err) {
        console.error('Error updating category:', err.message);
        res.status(500).json({ error: 'Failed to update category' });
        return;
      }
      res.status(200).json({ message: 'Category updated successfully', results });
    });
  },
  deleteCategorie: function(req, res) {
    const categoryId = req.params.id;

    Categories.delete(categoryId, (err, results) => {
      if (err) {
        console.error('Error deleting category:', err.message);
        res.status(500).json({ error: 'Failed to delete category' });
        return;
      }
      res.status(200).json({ message: 'Category deleted successfully', results });
    });
  }
};
