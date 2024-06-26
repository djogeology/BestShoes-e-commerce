const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, addProduct, postProduct, deleteProduct } = require('../controllers/Products');

router.get('/', getAllProducts);              
router.get('/:id', getProductById);           
router.post('/', addProduct);                 
router.post('/post', postProduct);            
router.delete('/:id', deleteProduct);  


module.exports = router;
