const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getByCategory,
  getProductsByQuantity,
  getProductsByDate
} = require('../controllers/Products');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/category/:category', getByCategory);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/onsale/:quantity', getProductsByQuantity); // Route definition updated for quantity-based search
router.get('/new', getProductsByDate); // Assuming getByDate fetches new products

module.exports = router;
