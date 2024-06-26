const express = require('express');
const router = express.Router();
const { getAllBrands, getBrandById, addBrand, updateBrand, deleteBrand } = require('../controllers/Brands');

router.get('/', getAllBrands);       
router.get('/:id', getBrandById);    
router.post('/', addBrand);         
router.put('/:id', updateBrand);      
router.delete('/:id', deleteBrand);  

module.exports = router;
