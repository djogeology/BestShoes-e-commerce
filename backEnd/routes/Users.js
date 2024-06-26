const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, addUser, postUser, deleteUser } = require('../controllers/Users');

router.get('/', getAllUsers);                
router.get('/:id', getUserById);             
router.post('/', addUser);                   
router.post('/post', postUser);              
router.delete('/:id', deleteUser);       


module.exports = router;
