const express = require('express');
const router = express.Router();
const { getAllStyles, getStyleById, addStyle, postStyle, deleteStyle } = require('../controllers/Styles');

router.get('/', getAllStyles);                
router.get('/:id', getStyleById);             
router.post('/', addStyle);                   
router.post('/post', postStyle);              
router.delete('/:id', deleteStyle);           


module.exports = router;
