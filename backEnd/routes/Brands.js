const express = require('express');
const router = express.Router();

const { getAllBrands, getBrandById, addBrand, postBrand, deleteBrand } = require('../controllers/Brands');


router.get('/', getAllBrands);       
router.get('/:id', getBrandById);    
router.post('/', addBrand);         
router.post('/post', postBrand);     
router.delete('/:id', deleteBrand); 


module.exports = router;
