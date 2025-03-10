const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/entry', userController.saveUserData);


module.exports = router;
