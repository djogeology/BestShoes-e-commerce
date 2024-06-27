const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, addUser, updateUser, deleteUser, getUserByEmailAndPass } = require('../controllers/Users');

router.get('/', getAllUsers);                
router.get('/:id', getUserById);             
router.post('/', addUser);                   
router.put('/:id', updateUser);               
router.delete('/:id', deleteUser);
router.post('/login', getUserByEmailAndPass);             

module.exports = router;
