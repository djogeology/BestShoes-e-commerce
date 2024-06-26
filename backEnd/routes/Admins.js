const express = require('express');
const router = express.Router();
const { getAllAdmins, getAdminById, addAdmin, postAdmin, deleteAdmin } = require('../controllers/Admins');

router.get('/', getAllAdmins);                
router.get('/:id', getAdminById);             
router.post('/', addAdmin);                   
router.post('/post', postAdmin);              
router.delete('/:id', deleteAdmin);  


module.exports = router;
