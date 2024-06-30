const express = require('express');
const router = express.Router();
const Products = require('../controllers/Products');

router.get('/', Products.getAllProducts); // Make sure these methods are defined in your Products controller
router.get('/:id', Products.getProductById);
router.get('/category/:category', Products.getByCategory);
router.post('/', Products.addProduct);
router.put('/:id', Products.updateProduct);
router.delete('/:id', Products.deleteProduct);
router.get('/onsale', Products.getProductsByQuantity); // Route definition for quantity-based search
router.get('/new', Products.getProductsByDate); // Assuming getByDate fetches new products

module.exports = router;
