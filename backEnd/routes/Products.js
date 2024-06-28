// routes/products.js
const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct, getByCategorie } = require('../controllers/Products');

router.get('/', getAllProducts);              
router.get('/:id', getProductById); 
router.get('/category/:category', getByCategorie);           
router.post('/', addProduct);                  
router.put('/:id', updateProduct);              
router.delete('/:id', deleteProduct);  
router.get('/onsale', getProductsByQuantity);   
router.get('/new', getProductsByDate);   

module.exports = router;
