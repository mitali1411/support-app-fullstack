const express = require('express')
const { registerUser, loginUser, secretController } = require('../controller/userController');
const { protect } = require('./authMiddleware');

const router = express.Router()

router.post('/', registerUser);
router.post('/login', loginUser);

router.get('/secret',protect, secretController)

module.exports = router;

