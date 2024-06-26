const express = require('express');
const router = express.Router();

const { getAllCategories, getCategorieById, addCategorie, postCategorie, deleteCategorie } = require('../controllers/Categories');

router.get('/', getAllCategories);          
router.get('/:id', getCategorieById);       
router.post('/', addCategorie);             
router.post('/post', postCategorie);        
router.delete('/:id', deleteCategorie);     


module.exports = router;
