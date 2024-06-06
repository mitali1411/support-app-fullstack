const express = require('express');
const { protect } = require('./authMiddleware');
const { getNotes, addNote } = require('../controller/noteController');
const router = express.Router({mergeParams:true});

router.get('/', protect, getNotes);
router.post('/', protect, addNote)


module.exports = router;