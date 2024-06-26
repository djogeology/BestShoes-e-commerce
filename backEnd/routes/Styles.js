const express = require('express');
const router = express.Router();
const { getAllStyles, getStyleById, addStyle, updateStyle, deleteStyle } = require('../controllers/Styles');

router.get('/', getAllStyles);                
router.get('/:id', getStyleById);             
router.post('/', addStyle);                   
router.put('/:id', updateStyle);               
router.delete('/:id', deleteStyle);           

module.exports = router;
