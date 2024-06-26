const express = require('express');
const router = express.Router();
const { getAllCategories, getCategorieById, addCategorie, updateCategorie, deleteCategorie } = require('../controllers/Categories');

router.get('/', getAllCategories);          
router.get('/:id', getCategorieById);       
router.post('/', addCategorie);             
router.put('/:id', updateCategorie);         
router.delete('/:id', deleteCategorie);     

module.exports = router;
